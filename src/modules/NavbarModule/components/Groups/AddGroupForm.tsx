import { Button } from '@mui/material'
import React, { useCallback, useMemo } from 'react'
import { useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Flex } from '../../../../components/Flex/Flex'
import { FormField } from '../../../../components/Form/FormField'
import { registerInput } from '../../../../utils/form.utils'
import { Errors, Inputs } from './AddGroupFormContainer'
import s from './AddGroup.module.scss'
import { Navbar } from '../../../LanguageModule/state/reducers/language.slice'

export interface Props {
  navbarLanguage: Navbar
  handleSubmit: UseFormHandleSubmit<Inputs>
  errors: Errors
  register: UseFormRegister<Inputs>
  errorFromServer: string | null
  onSubmit: (data: Inputs) => Promise<void>
}

export const AddGroupForm: React.FC<Props> = React.memo(
  ({ errorFromServer, errors, onSubmit, handleSubmit, register, navbarLanguage }) => {
    const isError = errors.title || errors.translate
    // console.log('render')

    return (
      <>
        <Flex direction='column' rowGap='10px'>
          <div style={{ color: 'white' }}>{navbarLanguage.addGroup}</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction='column' rowGap='20px'>
              <FormField
                color='white'
                className='some'
                registerInput={useMemo(
                  () => registerInput(register, 'title', {}),
                  [register, errors.title]
                )}
                error={errors.title && true}
                errorMessage={errors.title?.message}
                label={navbarLanguage.form.title}
              />

              <FormField
                color='white'
                className='some'
                registerInput={useMemo(
                  () => registerInput(register, 'translate', {}),
                  [register, errors.translate]
                )}
                error={useMemo(() => errors.translate && true, [errors.translate])}
                errorMessage={errors.translate?.message}
                label={navbarLanguage.form.translate}
              />

              <Button
                sx={{
                  // background: 'red',
                  borderColor: isError ? '#D70030' : 'white',
                  color: isError ? '#D70030' : 'white',
                  '&:hover': {
                    borderColor: isError ? '#D70030' : 'white',
                    color: isError ? '#D70030' : 'white'
                  }
                }}
                disableElevation
                className={s['submitButton']}
                type='submit'
                variant='outlined'
              >
                {navbarLanguage.form.add}
              </Button>
            </Flex>
          </form>
        </Flex>
      </>
    )
  }
)
