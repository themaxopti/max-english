import React from 'react'
import { FieldErrorsImpl, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { LearningForm } from './Form'

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

export const LearningFormContainer = () => {
  const dispatch = useAppDispatch()
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
    <LearningForm
      errorFromServer={null}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  )
}
