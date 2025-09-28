import React, { useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import App from './App'
import { store } from './store'
import { createAppTheme, createEmotionCache } from './theme'
import './styles/index.css'
import './i18n'
import i18n from 'i18next'

const Root = () => {
  const [dir, setDir] = useState<'ltr' | 'rtl'>(i18n.dir() as 'ltr' | 'rtl')

  useEffect(() => {
    const handler = (lng: string) => {
      const newDir = i18n.dir(lng) as 'ltr' | 'rtl'
      setDir(newDir)
      document.documentElement.setAttribute('dir', newDir)
    }
    i18n.on('languageChanged', handler)
    document.documentElement.setAttribute('dir', dir)
    return () => { i18n.off('languageChanged', handler) }
  }, [dir])

  const theme = useMemo(() => createAppTheme(dir), [dir])
  const cache = useMemo(() => createEmotionCache(dir), [dir])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
