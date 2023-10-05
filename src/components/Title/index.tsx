import React, { ReactNode } from 'react';

type ITitle = {
  children: ReactNode
}

const Title = ({ children }: ITitle) => {
  return (
    <h1 className='font-inter font-extrabold text-6xl md:text-7xl'>
      {children}
    </h1>
  )
}

export default Title