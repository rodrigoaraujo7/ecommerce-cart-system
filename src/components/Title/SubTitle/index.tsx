import React, { ReactNode } from 'react';

type ITitle = {
  children: ReactNode
}

const SubTitle = ({ children }: ITitle) => {
  return (
    <h1 className='font-inter font-medium text-2xl md:text-4xl'>
      {children}
    </h1>
  )
}

export default SubTitle