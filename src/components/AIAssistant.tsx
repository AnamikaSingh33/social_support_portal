import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, CircularProgress } from '@mui/material'
import { getAISuggestion } from '../api/openai'

interface Props {
  open: boolean
  onClose: () => void
  onAccept: (text: string) => void
  prompt: string
}

const AIAssistant: React.FC<Props> = ({ open, onClose, onAccept, prompt }) => {
  const [loading, setLoading] = React.useState(false)
  const [suggestion, setSuggestion] = React.useState('')

  React.useEffect(() => {
    if (open) {
      setLoading(true)
      getAISuggestion(prompt)
        .then(setSuggestion)
        .catch(() => setSuggestion('⚠️ Could not fetch suggestion.'))
        .finally(() => setLoading(false))
    }
  }, [open, prompt])

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>AI Suggestion</DialogTitle>
      <DialogContent>
        {loading ? (
          <CircularProgress />
        ) : (
          <TextField
            multiline
            fullWidth
            minRows={5}
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Discard</Button>
        <Button onClick={() => onAccept(suggestion)} variant="contained">Accept</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AIAssistant
