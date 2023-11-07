import { z } from 'zod'

// Schema -> is a represention for a data structure
export const CreateUserFormSchema = z.object({
  fullName: z.string()
    .nonempty('The name field is required'),
  email: z.string()
    .nonempty('The email field is required')
    .email('Invalid email!'),
  cellphoneNumber: z.number(),
  addres: z.string()
    .nonempty('The email field is required')
})

// type to remove typescript errors by reactHooks
export type CreateUserFormData = z.infer<typeof CreateUserFormSchema>