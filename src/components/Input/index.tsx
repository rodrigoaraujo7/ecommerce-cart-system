import { ReactNode } from "react";
import { UseFormRegister, FieldError } from 'react-hook-form'
import { CreateUserFormData } from "../../types/form";

type InputProps = {
  type: string;
  register: UseFormRegister<CreateUserFormData>;
  children: ReactNode;
  errors?: FieldError;
}

const Input = ({ type, register, children, errors }: InputProps) => {
  return (
    <div>
      <label htmlFor={type}>{children}</label>
      <input type={type} {...register(type as any)} />
      {errors && <span>{errors.message}</span>}
    </div>
  )
}

export default Input;