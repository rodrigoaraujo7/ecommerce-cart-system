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
    <div className="flex flex-col font-poppins font-medium w-full">
      <label
        htmlFor={type}
        className="text-xl text-black md:text-2xl"
      >
        {children}
      </label>
      <input
        id={type}
        type={type} {...register(type as any)}
        className={`
          ${errors && 'border-red'}
          border-2 border-grey400 rounded-md h-14 p-2 text-grey400 outline-none text-xl transition-colors
          md:text-3xl md:px-5 md:py-10
          focus:border-lightBlue focus:text-lightBlue
        `}
      />
      {errors && <span className="text-red text-xs md:text-base">{errors.message}</span>}
    </div>
  )
}

export default Input;