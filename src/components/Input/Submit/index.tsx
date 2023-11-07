import { ReactNode } from 'react'

// icons
import arrow from '../../../utils/icons/arrow.svg'

type SubmitProps = {
  children: ReactNode
}

const Submit = ({ children }: SubmitProps) => {
  return (
    <button
      type='submit'
      className='
      w-full flex justify-between items-center h-14 p-2 mt-7 bg-primaryBlue text-white text-2xl font-semibold font-poppins rounded-md
      md:text-3xl md:px-5 md:py-10'
    >
      {children}
      <img src={arrow} alt="" />
    </button>
  )
}

export default Submit;