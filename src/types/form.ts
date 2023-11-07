import { z } from 'zod'

// Schema -> is a represention for a data structure
export const CreateUserFormSchema = z.object({
  fullName: z.string()
    .nonempty('The Password field is required')
    .min(6, 'Password must be longer than 6 characters')
    .max(8, 'The password must not be a maximum of 8 characters'),
  // email: string,
  // cellphoneNhumber: number,
  // addres: string
})

// type to remove typescript errors by reactHooks
export type CreateUserFormData = z.infer<typeof CreateUserFormSchema>