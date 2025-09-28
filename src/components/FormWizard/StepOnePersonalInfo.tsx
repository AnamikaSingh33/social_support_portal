import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { updatePersonal } from '../../store/formSlice'

type FormValues = {
  name: string
  nationalId: string
  dateOfBirth: string
  gender: string
  email: string
  address: string
  city: string
  state: string
  country: string
  phone: string
}

interface Props {
  onValidityChange: (isValid: boolean) => void
}

const StepOnePersonalInfo: React.FC<Props> = ({ onValidityChange }) => {
  const dispatch = useDispatch()
  const personal = useSelector((s: RootState) => s.form.personal)

  const { control, formState, trigger } = useForm<FormValues>({
    defaultValues: personal,
    mode: 'onChange', // validate while typing
  })

  // inform parent (wizard) if form is valid/invalid
  React.useEffect(() => {
    onValidityChange(formState.isValid)
  }, [formState.isValid, onValidityChange])

  return (
    <Grid container spacing={2} role="form" aria-label="Personal information form">
      {/* Name */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Name" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ name: e.target.value }))
                trigger('name')
              }}
            />
          )}
        />
      </Grid>

      {/* National ID */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="nationalId"
          control={control}
          rules={{
  required: 'National ID is required',
  pattern: {
    value: /^[A-Z0-9]{6,12}$/, // simple example: 6-12 alphanumeric uppercase
    message: 'Invalid National ID format must be 6 digit',
  },
}}
          render={({ field, fieldState }) => (
            <TextField {...field} label="National ID" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ nationalId: e.target.value }))
                trigger('nationalId')
              }}
            />
          )}
        />
      </Grid>

      {/* Date of Birth */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="dateOfBirth"
          control={control}
         rules={{
  required: 'Date of Birth is required',
  validate: (value) => {
    const dob = new Date(value)
    const today = new Date()
    const age = today.getFullYear() - dob.getFullYear()
    const m = today.getMonth() - dob.getMonth()
    const isBirthdayPassed = m > 0 || (m === 0 && today.getDate() >= dob.getDate())
    const actualAge = isBirthdayPassed ? age : age - 1
    return actualAge >= 20 || 'You must be at least 20 years old'
  },
}}
          render={({ field, fieldState }) => (
            <TextField {...field} type="date" label="Date of Birth"
              InputLabelProps={{ shrink: true }} fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ dateOfBirth: e.target.value }))
                trigger('dateOfBirth')
              }}
            />
          )}
        />
      </Grid>

      {/* Gender */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="gender"
          control={control}
          rules={{ required: 'Gender is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Gender" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ gender: e.target.value }))
                trigger('gender')
              }}
            />
          )}
        />
      </Grid>

      {/* Email */}
      <Grid item xs={12}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Email" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ email: e.target.value }))
                trigger('email')
              }}
            />
          )}
        />
      </Grid>

      {/* Address */}
      <Grid item xs={12}>
        <Controller
          name="address"
          control={control}
          rules={{ required: 'Address is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Address" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ address: e.target.value }))
                trigger('address')
              }}
            />
          )}
        />
      </Grid>

      {/* City */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="city"
          control={control}
          rules={{ required: 'City is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="City" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ city: e.target.value }))
                trigger('city')
              }}
            />
          )}
        />
      </Grid>

      {/* State */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="state"
          control={control}
          rules={{ required: 'State is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="State" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ state: e.target.value }))
                trigger('state')
              }}
            />
          )}
        />
      </Grid>

      {/* Country */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="country"
          control={control}
          rules={{ required: 'Country is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Country" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ country: e.target.value }))
                trigger('country')
              }}
            />
          )}
        />
      </Grid>

      {/* Phone */}
      <Grid item xs={12} sm={6}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: 'Phone is required' }}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Phone" fullWidth
              error={!!fieldState.error} helperText={fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e)
                dispatch(updatePersonal({ phone: e.target.value }))
                trigger('phone')
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  )
}

export default StepOnePersonalInfo
