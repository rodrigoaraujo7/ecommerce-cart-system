// react-hook-forms
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// zod
import { CreateUserFormSchema, CreateUserFormData } from '../../../types/form'
import { zodResolver } from '@hookform/resolvers/zod'

// mask
import { normalizePhoneNumber } from '../../../utils/masks'

// react-router
import { useNavigate } from 'react-router-dom'

// components
import { Submit, Input } from '../../../components'

const Form = () => {
  const [output, setOutput] = useState(''); // state to show the form data
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }, // need to show the form validation errors
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema)
  })

  // cellphone number mask
  const phoneValue = watch('cellphoneNumber')
  useEffect(() => {
    setValue('cellphoneNumber', normalizePhoneNumber(phoneValue))
  }, [phoneValue])

  // submit user  
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    // redirecting the user
    navigate('/checkout', { replace: true })

    // creating the user
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-20'>
      <div className="inputs flex flex-col gap-7">
        <Input type='fullName' placeholder='Ex: John Doe' register={register} errors={errors.fullName}>Full Name</Input>
        <Input type='email' placeholder='Ex: johndoe@gmail.com' register={register} errors={errors.email}>Your best email</Input>
        <Input type='cellphoneNumber' placeholder='Ex: (32) 223334-5566' register={register} errors={errors.cellphoneNumber}>Cell Phone number</Input>
        <Input type='addres' placeholder='Ex: California - EUA' register={register} errors={errors.addres}>Addres</Input>
      </div>

      <Submit>Next Step</Submit>
      {/* <pre>{output}</pre> */}
    </form>
  )
}

export default Form;