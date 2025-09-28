import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid, TextField, IconButton, Box } from '@mui/material'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { updateSituations } from '../../store/formSlice'
import AIAssistant from '../AIAssistant'

type FormValues = {
  currentFinancial: string
  employmentCircumstances: string
  reasonForApplying: string
}

const StepThreeSituation: React.FC = () => {
  const dispatch = useDispatch()
  const situations = useSelector((s: RootState) => s.form.situations)
  const { control } = useForm<FormValues>({ defaultValues: situations })

  const [aiOpen, setAiOpen] = React.useState(false)
  const [aiTarget, setAiTarget] = React.useState<keyof FormValues>('currentFinancial')

  const handleAI = (field: keyof FormValues) => {
    setAiTarget(field)
    setAiOpen(true)
  }

  const handleAccept = (text: string) => {
    dispatch(updateSituations({ [aiTarget]: text }))
    setAiOpen(false)
  }

  return (
    <Grid container spacing={3} role="form" aria-label="Situation descriptions form">
      {(
        [
          { key: 'currentFinancial', label: 'Current Financial Situation' },
          { key: 'employmentCircumstances', label: 'Employment Circumstances' },
          { key: 'reasonForApplying', label: 'Reason for Applying' },
        ] as { key: keyof FormValues; label: string }[]
      ).map(({ key, label }) => (
        <Grid item xs={12} key={key}>
          <Box display="flex" alignItems="flex-start" gap={1}>
            <Controller
              name={key}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={label}
                  multiline
                  fullWidth
                  minRows={4}
                  onBlur={() => dispatch(updateSituations({ [key]: field.value }))}
                />
              )}
            />
            <IconButton
              onClick={() => handleAI(key)}
              color="primary"
              aria-label={`Help me write ${label}`}
            >
              <AutoFixHighIcon />
            </IconButton>
          </Box>
        </Grid>
      ))}

      <AIAssistant
        open={aiOpen}
        onClose={() => setAiOpen(false)}
        onAccept={handleAccept}
        prompt={`Help me describe my ${aiTarget}`}
      />
    </Grid>
  )
}

export default StepThreeSituation
