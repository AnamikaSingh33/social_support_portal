import { createTheme } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

export const createAppTheme = (direction: 'ltr' | 'rtl') => createTheme({
  direction,
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#f7f9fc' }
      }
    }
  }
})

export const createEmotionCache = (dir: 'ltr' | 'rtl') => createCache({
  key: dir === 'rtl' ? 'mui-rtl' : 'mui',
  stylisPlugins: dir === 'rtl' ? [prefixer, rtlPlugin] : [prefixer],
})
