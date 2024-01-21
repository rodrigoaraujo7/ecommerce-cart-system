// react
import { Suspense, lazy } from 'react'

// framer motion
import { motion } from 'framer-motion'

// components
import {
  Title,
  Cart
} from "../../components";

const Catalog = lazy(() => import('../../components/Catalog'))

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75 }}
      className='font-inter flex justify-center items-center my-32'
    >
      <div className='w-4/5 flex flex-col items-center lg:w-3/5'>
        <Title>Welcome to the <span className='text-primaryBlue'>Build ~</span></Title>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Catalog />
        </Suspense>
        <Cart />
      </div>
    </motion.main>
  );
}

export default Home;
