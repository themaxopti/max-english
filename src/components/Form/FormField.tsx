import React from 'react'
import { TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { registerInput } from '../../utils/form.utils'
import { ThemeProvider, createTheme, withStyles } from '@mui/material/styles'
import { useEffect } from 'react'

interface FormFieldProps {
  className: string
  error: undefined | boolean
  errorMessage: string | undefined
  label: string
  registerInput: any
  color: string
}

const useStyles = makeStyles({
  root: {
    '&$disabled $notchedOutline': {
      borderColor: 'orange'
    }
  },
  disabled: {},
  notchedOutline: {}
})

export const FormField: React.FC<FormFieldProps> = React.memo(
  ({ className, error, label, errorMessage, registerInput, color }) => {
    console.log('render')

    return (
      <div>
        <TextField
          // color={error ? 'error' : 'white'}
          // inputProps={{ style: { color: 'white', borderColor: 'white' } }}
          // classN ame={className}
          error={error}
          // inputProps={{ className: classes.root }}
          sx={{
            input: {
              color: error ? '#D70030' : 'white'
            },
            '& .MuiInputLabel-root': {
              color: error ? '#D70030' : 'white',
              borderColor: error ? '#D70030' : 'white'
            },
            '& .MuiOutlinedInput-root': {
              color: error ? '#D70030' : 'white'
            },
            '& label.Mui-focused': {
              color: error ? '#D70030' : 'white'
            },
            borderBottom: `2px solid ${error ? 'red' : 'white'}`,
            borderRadius: 0,
            color: error ? '#D70030' : 'white'
          }}
          InputProps={{ disableUnderline: true }}
          // id='outlined-basic'
          label={label}
          {...registerInput}
          variant='standard'
        />
        {error && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
    )
  }
)
