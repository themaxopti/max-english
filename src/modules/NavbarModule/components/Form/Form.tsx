import React from 'react'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { FormField } from '../../../../components/Form/FormField'
import { registerInput } from '../../../../utils/form.utils'
import { Errors, Inputs } from './FormContainer'
import s from './FormLearning.module.scss'
import { TextField, Button } from '@mui/material'
import { Flex } from '../../../../components/Flex/Flex'

interface FormProps {
  handleSubmit: UseFormHandleSubmit<Inputs>
  errors: Errors
  register: UseFormRegister<Inputs>
  errorFromServer: string | null
  onSubmit: (data: Inputs) => Promise<void>
}

export const LearningForm: React.FC<FormProps> = ({
  errorFromServer,
  errors,
  onSubmit,
  handleSubmit,
  register
}) => {
  return (
    <>
      <div>Or add own word</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex rowGap={'20px'} direction='column'>
          <FormField
            registerInput={registerInput(register, 'title', {})}
            className='some'
            error={errors.title && true}
            errorMessage={errors.title?.message}
            label='word'
          />
          <FormField
            className='some'
            registerInput={registerInput(register, 'translate', {})}
            error={errors.translate && true}
            errorMessage={errors.translate?.message}
            label='translate'
          />
        </Flex>
        {errorFromServer && <div className={s.error}>{errorFromServer}</div>}

        <Button disableElevation className={s.sbmitBtn} type='submit' variant='outlined'>
          Add
        </Button>
      </form>
    </>
  )
}
