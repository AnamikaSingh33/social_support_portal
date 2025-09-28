import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import ApplicationForm from './pages/ApplicationForm'
import SuccessPage from './pages/SuccessPage'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>{t('app.title')}</Link>
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<ApplicationForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Container>
    </Box>
  )
}
