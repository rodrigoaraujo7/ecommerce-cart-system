import React, { ReactNode } from 'react';

import { motion } from 'framer-motion'

type ITitle = {
  children: ReactNode
}

const Title = ({ children }: ITitle) => {
  return (
    <motion.h1
      className='font-inter font-extrabold text-6xl md:text-7xl'
      initial={{ // initial position
        opacity: 0,
      }}
      animate={{ // when active the animation
        opacity: 1,
        transition: { duration: 1.25 }
      }}
    >
      {children}
    </motion.h1>
  )
}

export default Title