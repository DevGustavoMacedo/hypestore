'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import TFormSchema from '@/types/TFormSchema'

import createFormSchema from '@/utils/validateSchema'

import GoBack from '@/components/GoBack'
import Modal from '@/components/Modal'

export default function Contact() {
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

  useEffect(() => {
    document.body.classList.remove('overflow-hidden')
  }, [])

  const { push } = useRouter()

  const addNewTech = () => append({ category: '', description: '' })

  const delNewTech = (id: number) => remove(id)

  const toggle = () => {
    const modal = document.getElementById('modal')
    const btnSubmit = document.getElementById('btnSubmit')
    const progress = document.getElementById('progress')

    if (modal && btnSubmit && progress) {
      ;[
        'opacity-100',
        'bg-opacity-80',
        'pointer-events-none',
        'animate-open-menu',
      ].map((item) => modal.classList.toggle(item))

      btnSubmit.classList.toggle('bg-green-400')
      progress.classList.toggle('animate-progress')
      document.body.classList.toggle('overflow-hidden')
    }
  }

  const createComplaint = (data: TFormSchema) => {
    setFormData(data)

    toggle()

    setTimeout(() => {
      toggle()
      push('/')
    }, 10000)
  }

  return (
    <>
      <Modal isFormData={isFormData} />
      <section className="dark:bg-brand-black bg-brand-white flex flex-col items-center">
        <div className="flex items-center justify-around w-[90%]">
          <GoBack />
          <h2
            className="font-title text-brand-purple text-xl uppercase py-5
          md:text-2xl lg:text-3xl lg:py-7"
          >
            Contact Us
          </h2>
          <div></div>
        </div>
        <form
          onSubmit={handleSubmit(createComplaint)}
          className="flex flex-col gap-4 text-brand-purple items-center font-text [input:bg-brand-white] dark:[input:bg-brand-black] w-[90%] max-w-3xl"
        >
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="font-title text-sm
            lg:text-lg"
            >
              NAME
            </label>
            <input
              type="text"
              {...register('name')}
              className="bg-brand-purple bg-opacity-10 p-2 rounded text-brand-black dark:text-brand-white
              lg:h-16 lg:p-4 lg:text-lg"
            />
            {formErrors.name && (
              <span className="bg-red-500 bg-opacity-40 text-red-950 mt-1 text-sm w-fit px-2 rounded lg:text-lg lg:mt-2">
                {formErrors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="font-title text-sm
            lg:text-lg"
            >
              EMAIL
            </label>
            <input
              type="email"
              {...register('email')}
              className="bg-brand-purple bg-opacity-10 p-2 rounded text-brand-black dark:text-brand-white
              lg:h-16 lg:p-4 lg:text-lg"
            />
            {formErrors.email && (
              <span className="bg-red-500 bg-opacity-40 text-red-950 mt-1 text-sm w-fit px-2 rounded lg:text-lg lg:mt-2">
                {formErrors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="emailConfirm"
              className="font-title text-sm
            lg:text-lg"
            >
              EMAIL CONFIRM
            </label>
            <input
              type="email"
              {...register('emailConfirm')}
              className="bg-brand-purple bg-opacity-10 p-2 rounded text-brand-black dark:text-brand-white
              lg:h-16 lg:p-4 lg:text-lg"
            />
            {formErrors.emailConfirm && (
              <span className="bg-red-500 bg-opacity-40 text-red-950 mt-1 text-sm w-fit px-2 rounded lg:text-lg lg:mt-2">
                {formErrors.emailConfirm.message}
              </span>
            )}
          </div>

          <div className="flex justify-between w-full mt-4">
            <label
              className="font-title text-sm
            lg:text-lg uppercase"
            >
              Suggestions / Complaints
            </label>
            <button
              type="button"
              onClick={addNewTech}
              className="self-end bg-brand-purple text-brand-white dark:text-brand-black p-2 pb-1 rounded-md text-sm dark:hover:bg-brand-black hover:bg-brand-white hover:text-brand-purple
              lg:text-lg"
            >
              ADD
            </button>
          </div>
          {formErrors.complaints && (
            <span className="bg-red-500 bg-opacity-40 text-red-950 mt-1 text-sm w-fit px-2 rounded lg:text-lg lg:mt-2">
              {formErrors.complaints.message}
            </span>
          )}

          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col w-full gap-4">
              <div className="flex flex-col">
                <label htmlFor="category" className="lg:text-lg">
                  Category
                </label>

                <select
                  defaultValue=""
                  {...register(`complaints.${index}.category`)}
                  className="bg-brand-purple bg-opacity-10 p-2 rounded text-brand-black dark:text-brand-white
                  lg:h-16 lg:p-4 lg:text-lg"
                >
                  <option
                    className="bg-brand-purple dark:text-brand-black text-brand-white"
                    value=""
                  >
                    Select an option
                  </option>
                  <option
                    className="bg-brand-purple dark:text-brand-black text-brand-white w-1/2"
                    value="Suggestion"
                  >
                    Suggestions
                  </option>
                  <option
                    className="bg-brand-purple dark:text-brand-black text-brand-white"
                    value="Complaint"
                  >
                    Complaints
                  </option>
                </select>
                {formErrors.complaints?.[index]?.category && (
                  <span className="bg-red-500 bg-opacity-40 text-red-950 mt-1 text-sm w-fit px-2 rounded lg:text-lg lg:mt-2">
                    {formErrors.complaints?.[index]?.category?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="description" className="lg:text-lg">
                  Message:{' '}
                </label>

                <textarea
                  {...register(`complaints.${index}.description`)}
                  className="bg-brand-purple bg-opacity-10 p-2 rounded text-brand-black dark:text-brand-white overflow-y-scroll
                  lg:h-36 lg:p-4 lg:text-xl"
                />
                {formErrors.complaints?.[index]?.description && (
                  <span className="bg-red-500 bg-opacity-40 text-red-950 mt-1 text-sm w-fit px-2 rounded lg:text-lg lg:mt-2">
                    {formErrors.complaints?.[index]?.description?.message}
                  </span>
                )}
              </div>

              <button
                onClick={() => delNewTech(index)}
                className="self-end bg-brand-purple text-brand-white dark:text-brand-black p-2 pb-1 rounded-md text-sm dark:hover:bg-brand-black hover:bg-brand-white hover:text-brand-purple
                lg:text-lg"
              >
                DEL
              </button>
            </div>
          ))}

          <button
            type="submit"
            id="btnSubmit"
            className="bg-brand-purple text-brand-white dark:text-brand-black p-2 pb-1 rounded-md text-lg lg:text-xl"
          >
            SEND
          </button>
        </form>
      </section>
    </>
  )
}
