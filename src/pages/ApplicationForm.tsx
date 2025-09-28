import * as React from 'react'
import { Box, Button, Paper } from '@mui/material'
import ProgressBar from '../components/FormWizard/ProgressBar'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import StepOnePersonalInfo from '../components/FormWizard/StepOnePersonalInfo'
import StepTwoFamilyInfo from '../components/FormWizard/StepTwoFamilyInfo'
import StepThreeSituation from '../components/FormWizard/StepThreeSituation'

const ApplicationForm: React.FC = () => {
  const { t } = useTranslation()
  const [step, setStep] = React.useState(0)
  const navigate = useNavigate()

  // track validity for each step
  const [isStepOneValid, setIsStepOneValid] = React.useState(false)
  const [isStepTwoValid, setIsStepTwoValid] = React.useState(false)
 

  const next = () => setStep((s) => Math.min(2, s + 1))
  const back = () => setStep((s) => Math.max(0, s - 1))

  // decide when Next/Submit buttons should be disabled
  const nextDisabled =
    (step === 0 && !isStepOneValid) ||
    (step === 1 && !isStepTwoValid)
const submitDisabled = false

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <ProgressBar activeStep={step} />

      <Box sx={{ minHeight: 250 }}>
        {step === 0 && <StepOnePersonalInfo onValidityChange={setIsStepOneValid} />}
        {step === 1 && <StepTwoFamilyInfo onValidityChange={setIsStepTwoValid} />}
        {step === 2 && <StepThreeSituation/>}
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 3 }}>
        <Button variant="outlined" onClick={back} disabled={step === 0}>
          {t('nav.back')}
        </Button>

        {step < 2 ? (
          <Button
            variant="contained"
            onClick={next}
            disabled={nextDisabled}
          >
            {t('nav.next')}
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => navigate('/success')}
            disabled={submitDisabled}
          >
            {t('nav.submit')}
          </Button>
        )}
      </Box>
    </Paper>
  )
}

export default ApplicationForm
