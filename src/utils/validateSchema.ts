import { z } from 'zod'

const createFormSchema = z
  .object({
    name: z
      .string()
      .nonempty('Required field')
      .min(5, 'Minimum: 5 letters')
      .max(25, 'Maximum: 25 letters')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    email: z
      .string()
      .email('Invalid email')
      .min(10, 'Minimum: 10 letters')
      .max(50, 'Maximum: 50 letters')
      .refine(
        (email) =>
          ['@gmail.com', '@hotmail.com', '@outlook.com'].some((element) =>
            email.endsWith(element),
          ),
        'Only gmail, outlook or hotmail',
      ),
    emailConfirm: z
      .string()
      .email('Invalid email')
      .min(10, 'Minimum: 10 letters')
      .max(50, 'Maximum: 50 letters')
      .refine(
        (email) =>
          ['@gmail.com', '@hotmail.com', '@outlook.com'].some((element) =>
            email.endsWith(element),
          ),
        'Only gmail, outlook or hotmail',
      ),
    complaints: z
      .array(
        z.object({
          category: z
            .enum(['Suggestion', 'Complaint', ''])
            .refine((category) => category !== '', 'Required field'),
          description: z
            .string()
            .nonempty('Required field')
            .min(20, 'Minimum: 20 letters')
            .max(200, 'Maximum: 200 letters')
            .transform((text) => text.toLocaleLowerCase()),
        }),
      )
      .min(1, 'Send at least one')
      .max(5, 'The maximum is 5'),
  })
  .refine((data) => data.email === data.emailConfirm, {
    path: ['emailConfirm'],
    message: 'Emails doesnt match',
  })

export default createFormSchema
