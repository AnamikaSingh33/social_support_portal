import * as React from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface Props { activeStep: number }

const ProgressBar: React.FC<Props> = ({ activeStep }) => {
  const { t } = useTranslation()
  const steps = [t('steps.personal'), t('steps.family'), t('steps.situation')]
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
      {steps.map((label, idx) => (
        <Step key={idx}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default ProgressBar
