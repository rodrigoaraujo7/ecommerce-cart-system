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
    <form onSubmit={handleSubmit(createUser)} className='mt-20'>
      <div className="inputs flex flex-col gap-7">
        <Input type='fullName' register={register} errors={errors.fullName}>Full Name</Input>
        <Input type='email' register={register} errors={errors.email}>Your best email</Input>
        <Input type='cellphoneNumber' register={register} errors={errors.cellphoneNumber}>Cellphone number</Input>
        <Input type='addres' register={register} errors={errors.addres}>Addres</Input>
      </div>

      <input type="submit" />
      <pre>{output}</pre>
    </form>
  )
}

export default Form;