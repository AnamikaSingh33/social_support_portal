import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Grid, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { updateFamily } from '../../store/formSlice'

type FormValues = {
  maritalStatus: string
  dependents: number | ''
  employmentStatus: string
  monthlyIncome: number | ''
  housingStatus: string
}

interface Props {
  onValidityChange: (isValid: boolean) => void
}

const StepTwoFamilyInfo: React.FC<Props> = ({ onValidityChange }) => {
  const dispatch = useDispatch()
  const family = useSelector((s: RootState) => s.form.family)

  const { control, formState, trigger } = useForm<FormValues>({
    defaultValues: family,
    mode: 'onChange'
  })

  // tell parent if form is valid
  React.useEffect(() => {
    onValidityChange(formState.isValid)
  }, [formState.isValid, onValidityChange])

  return (
    <Grid container spacing={2} role="form" aria-label="Family and financial information form">
      {/* Marital Status (required) */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="maritalStatus"
          control={control}
          rules={{ required: 'Marital Status is required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Marital Status"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updateFamily({ maritalStatus: e.target.value }))
                trigger('maritalStatus')
              }}
            >
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
            </TextField>
          )}
        />
      </Grid>

      {/* Dependents (required number ≥ 0) */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="dependents"
          control={control}
          rules={{
            required: 'Dependents is required',
            validate: (v) => (typeof v === 'number' && v >= 0) || 'Must be 0 or more'
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="number"
              label="Dependents"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onChange={(e) => {
                const num = e.target.value === '' ? '' : Number(e.target.value)
                field.onChange(num)
                dispatch(updateFamily({ dependents: num }))
                trigger('dependents')
              }}
            />
          )}
        />
      </Grid>

      {/* Employment Status (required) */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="employmentStatus"
          control={control}
          rules={{ required: 'Employment Status is required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Employment Status"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updateFamily({ employmentStatus: e.target.value }))
                trigger('employmentStatus')
              }}
            >
              <MenuItem value="employed">Employed</MenuItem>
              <MenuItem value="unemployed">Unemployed</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="retired">Retired</MenuItem>
            </TextField>
          )}
        />
      </Grid>

      {/* Monthly Income (required number ≥ 0) */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="monthlyIncome"
          control={control}
          rules={{
            required: 'Monthly income is required',
            validate: (v) => (typeof v === 'number' && v >= 0) || 'Must be 0 or more'
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="number"
              label="Monthly Income"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onChange={(e) => {
                const num = e.target.value === '' ? '' : Number(e.target.value)
                field.onChange(num)
                dispatch(updateFamily({ monthlyIncome: num }))
                trigger('monthlyIncome')
              }}
            />
          )}
        />
      </Grid>

      {/* Housing Status (required) */}
      <Grid item xs={12}>
        <Controller
          name="housingStatus"
          control={control}
          rules={{ required: 'Housing Status is required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Housing Status"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updateFamily({ housingStatus: e.target.value }))
                trigger('housingStatus')
              }}
            >
              <MenuItem value="rent">Rent</MenuItem>
              <MenuItem value="own">Own</MenuItem>
              <MenuItem value="withFamily">With Family</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          )}
        />
      </Grid>
    </Grid>
  )
}

export default StepTwoFamilyInfo
