// react-hook-forms
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// zod
import { CreateUserFormSchema, CreateUserFormData } from '../../../types/form'
import { zodResolver } from '@hookform/resolvers/zod'

// components
import { Input } from '../../../components'

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
      <Input type='fullName' register={register} errors={errors.fullName}>Full Name</Input>

      <input type="submit" />
      <pre>{output}</pre>
    </form>
  )
}

export default Form;