import createFormSchema from '@/utils/validateSchema'
import { z } from 'zod'

type TFormSchema = z.infer<typeof createFormSchema>

export default TFormSchema