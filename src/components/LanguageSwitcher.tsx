import * as React from 'react'
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation()
  const [lng, setLng] = React.useState(i18n.language.startsWith('ar') ? 'ar' : 'en')

  const handleChange = (_: any, value: 'en' | 'ar' | null) => {
    if (!value) return
    setLng(value)
    i18n.changeLanguage(value)
  }

  return (
    <Tooltip title={t('language') as string}>
      <ToggleButtonGroup
        size="small"
        value={lng}
        exclusive
        onChange={handleChange}
        aria-label={t('language') as string}
      >
        <ToggleButton value="en">EN</ToggleButton>
        <ToggleButton value="ar">AR</ToggleButton>
      </ToggleButtonGroup>
    </Tooltip>
  )
}

export default LanguageSwitcher
