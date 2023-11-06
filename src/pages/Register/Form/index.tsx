import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Schema -> is a represention for a data structure
const CreateUserFormSchema = z.object({
  fullName: z.string()
    .nonempty('The Password field is required')
    .min(6, 'Password must be longer than 6 characters')
    .max(8, 'The password must not be a maximum of 8 characters'),
  // email: string,
  // cellphoneNhumber: number,
  // addres: string
})

// type to remove typescript errors by reactHooks
type CreateUserFormData = z.infer<typeof CreateUserFormSchema>

const Form = () => {
  const [output, setOutput] = useState(''); // state to show the form data
  const {
    register,
    handleSubmit,
    formState: { errors }, // need to show the form validation errors
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema)
  })

  function createUser(data: any) {
    // storing the data on my state
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type='fullName' {...register('fullName')} className='border-2' />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </div>

      <input type="submit" />

      <pre>{output}</pre>
    </form>
  )
}

export default Form;