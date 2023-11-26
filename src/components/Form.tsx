import TFormProps from '@/types/TFormProps'

export default function Form({ formProps }: TFormProps) {
  const {
    createComplaint,
    addNewTech,
    delNewTech,
    register,
    handleSubmit,
    fields,
    formErrors,
  } = formProps

  return (
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
          className="bg-brand-purple bg-opacity-20 p-2 rounded text-brand-black dark:text-brand-white
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
          className="bg-brand-purple bg-opacity-20 p-2 rounded text-brand-black dark:text-brand-white
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
          className="bg-brand-purple bg-opacity-20 p-2 rounded text-brand-black dark:text-brand-white
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
          className="self-end bg-brand-purple text-brand-white dark:text-brand-black p-2 pb-1 rounded-md text-sm hover:bg-opacity-50 transition-all
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
              className="bg-brand-purple bg-opacity-20 p-2 rounded text-brand-black dark:text-brand-white
            lg:h-16 lg:p-4 lg:text-lg dark:focus:bg-[#3b2b50] focus:bg-[#d6bef1]"
            >
              <option value="">Select an option</option>
              <option value="Suggestion">Suggestions</option>
              <option value="Complaint">Complaints</option>
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
              className="bg-brand-purple bg-opacity-20 p-2 rounded text-brand-black dark:text-brand-white overflow-y-scroll
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
            className="self-end bg-brand-purple text-brand-white dark:text-brand-black p-2 pb-1 rounded-md text-sm hover:bg-opacity-50 transition-all
          lg:text-lg"
          >
            DEL
          </button>
        </div>
      ))}

      <button
        type="submit"
        className="bg-brand-purple text-brand-white dark:text-brand-black p-2 pb-1 rounded-md text-lg hover:bg-opacity-50 transition-all lg:text-x"
      >
        SEND
      </button>
    </form>
  )
}
