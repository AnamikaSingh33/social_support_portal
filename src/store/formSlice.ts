import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PersonalInfo = {
  name: string
  nationalId: string
  dateOfBirth: string
  gender: string
  address: string
  city: string
  state: string
  country: string
  phone: string
  email: string
}

type FamilyFinancial = {
  maritalStatus: string
  dependents: number | ''
  employmentStatus: string
  monthlyIncome: number | ''
  housingStatus: string
}

type Situations = {
  currentFinancial: string
  employmentCircumstances: string
  reasonForApplying: string
}

export type FormState = {
  step: number
  personal: PersonalInfo
  family: FamilyFinancial
  situations: Situations
}

const initialState: FormState = {
  step: 0,
  personal: {
    name: '',
    nationalId: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phone: '',
    email: ''
  },
  family: {
    maritalStatus: '',
    dependents: '',
    employmentStatus: '',
    monthlyIncome: '',
    housingStatus: ''
  },
  situations: {
    currentFinancial: '',
    employmentCircumstances: '',
    reasonForApplying: ''
  }
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => { state.step = action.payload },
    updatePersonal: (state, action: PayloadAction<Partial<PersonalInfo>>) => {
      state.personal = { ...state.personal, ...action.payload }
    },
    updateFamily: (state, action: PayloadAction<Partial<FamilyFinancial>>) => {
      state.family = { ...state.family, ...action.payload }
    },
    updateSituations: (state, action: PayloadAction<Partial<Situations>>) => {
      state.situations = { ...state.situations, ...action.payload }
    },
    reset: () => initialState
  }
})

export const { setStep, updatePersonal, updateFamily, updateSituations, reset } = formSlice.actions
export default formSlice.reducer
