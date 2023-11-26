'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import TFormSchema from '@/types/TFormSchema'

import createFormSchema from '@/utils/validateSchema'

import Modal from '@/components/Modal'
import { GoBackButton } from '@/components/GoBackButton'
import Form from '@/components/Form'

export default function Contact() {
  const [isModal, setModal] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    control,
  } = useForm<TFormSchema>({
    resolver: zodResolver(createFormSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'complaints',
  })

  const [isFormData, setFormData] = useState<TFormSchema>({
    name: '',
    email: '',
    emailConfirm: '',
    complaints: [
      {
        description: '',
        category: '',
      },
    ],
  })

  const { push } = useRouter()

  const addNewTech = () => append({ category: '', description: '' })

  const delNewTech = (id: number) => remove(id)

  const createComplaint = (data: TFormSchema) => {
    setFormData(data)
    setModal((prevState) => !prevState)

    setTimeout(() => {
      setModal((prevState) => !prevState)
      push('/')
    }, 7000)
  }

  const formProps = {
    createComplaint,
    addNewTech,
    delNewTech,
    register,
    handleSubmit,
    fields,
    formErrors,
  }

  return (
    <>
      <Modal isFormData={isFormData} isModal={isModal} />
      <section className="dark:bg-brand-black bg-brand-white flex flex-col items-center">
        <div className="flex items-center justify-around w-[90%]">
          <GoBackButton />
          <h2
            className="font-title text-brand-purple text-xl uppercase py-5
          md:text-2xl lg:text-3xl lg:py-7"
          >
            Contact Us
          </h2>
          <div></div>
        </div>
        <Form formProps={formProps} />
      </section>
    </>
  )
}
