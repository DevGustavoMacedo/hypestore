import TFormSchema from './TFormSchema'
import {
  FieldArrayWithId,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

type TFields = TFormSchema & {
  complaints: string
  id: string
}

type TFormProps = {
  formProps: {
    createComplaint: (data: TFormSchema) => void
    addNewTech: () => void
    delNewTech: (id: number) => void
    register: UseFormRegister<TFormSchema>
    handleSubmit: UseFormHandleSubmit<TFormSchema>
    fields: FieldArrayWithId<TFields>[]
    formErrors: FieldErrors<TFormSchema>
  }
}

export default TFormProps