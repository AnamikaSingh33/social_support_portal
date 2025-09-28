import * as React from 'react'
import { Paper, Typography, Button, Box, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { reset } from '../store/formSlice'

const SuccessPage: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useSelector((state: RootState) => state.form)

  const handleGoHome = () => {
    dispatch(reset())   // clear all form state
    navigate('/')       // go home
  }

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
         Submitted
      </Typography>
      <Typography sx={{ mb: 3, textAlign: 'center' }}>
        Your application was submitted (mock).
      </Typography>

      {/* Personal Info */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Divider sx={{ mb: 1 }} />
        {Object.entries(form.personal).map(([key, value]) => (
          <Typography key={key}><b>{key}:</b> {value || '-'}</Typography>
        ))}
      </Box>

      {/* Family Info */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Family & Financial Information</Typography>
        <Divider sx={{ mb: 1 }} />
        {Object.entries(form.family).map(([key, value]) => (
          <Typography key={key}><b>{key}:</b> {value || '-'}</Typography>
        ))}
      </Box>

      {/* Situations */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Situations</Typography>
        <Divider sx={{ mb: 1 }} />
        {Object.entries(form.situations).map(([key, value]) => (
          <Typography key={key}><b>{key}:</b> {value || '-'}</Typography>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button onClick={handleGoHome} variant="contained">
          Go Home
        </Button>
      </Box>
    </Paper>
  )
}

export default SuccessPage
