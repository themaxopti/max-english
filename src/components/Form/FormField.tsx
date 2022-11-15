import React from 'react'
import { TextField, Button } from '@mui/material'
import { registerInput } from '../../utils/form.utils'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEffect } from 'react'

interface FormFieldProps {
  className: string
  error: undefined | boolean
  errorMessage: string | undefined
  label: string
  registerInput: any
}

export const FormField: React.FC<FormFieldProps> = ({
  className,
  error,
  label,
  errorMessage,
  registerInput
}) => {
  useEffect(() => {
    console.log(registerInput)
  }, [])

  return (
    <div>
      <TextField
        color={error ? 'error' : 'primary'}
        className={className}
        error={error}
        label={label}
        {...registerInput}
        variant='standard'
      />
      {error && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  )
}
