import React, { useMemo, useCallback } from 'react'
import { FieldErrorsImpl, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { mainLanguageNavbarSelector } from '../../../LanguageModule/state/selectors/language.selectors'
import { AddGroupForm } from './AddGroupForm'

export interface Inputs {
  title: string
  translate: string
}

export type Errors = Partial<
  FieldErrorsImpl<{
    title: string
    translate: string
  }>
>

export const AddGroupFormContainer = () => {
  const navbarLanguage = useSelector(mainLanguageNavbarSelector)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit = async (data: Inputs) => {
    // dispatch(makeUser(data))
    console.log(data)
  }

  return (
    <AddGroupForm
      navbarLanguage={navbarLanguage}
      errorFromServer={null}
      errors={useMemo(() => errors, [errors])}
      handleSubmit={useCallback(() => handleSubmit(onSubmit), [])}
      onSubmit={onSubmit}
      register={register}
    />
  )
}
