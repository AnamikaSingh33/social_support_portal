import axios from 'axios'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function getAISuggestion(prompt: string): Promise<string> {
  let attempts = 0
  const maxAttempts = 3

  while (attempts < maxAttempts) {
    try {
      const res = await axios.post(
        '/api/v1/chat/completions', // goes through Vite proxy to OpenAI
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          timeout: 12000,
        }
      )

      const text = res.data?.choices?.[0]?.message?.content?.trim()
      if (!text) throw new Error('Empty response from AI')
      return text
    } catch (err: any) {
      const status = err.response?.status

      // Handle rate limiting
      if (status === 429 && attempts < maxAttempts - 1) {
        attempts++
        console.warn(`Rate limited. Retrying in ${attempts} sec...`)
        await sleep(attempts * 1000)
        continue
      }

      // Bubble up other errors
      const msg =
        err.response?.data?.error?.message ||
        err.message ||
        'AI request failed'
      console.error('AI error:', status, msg)
      throw new Error(msg)
    }
  }

  throw new Error('AI request failed after retries')
}
