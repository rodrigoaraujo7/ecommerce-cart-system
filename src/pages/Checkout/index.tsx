// provider
import { useCartContext } from '../../providers/Cart'

import { useNavigate } from 'react-router-dom'

// components
import { Hr } from './Hr'

// framer motion
import { motion } from 'framer-motion'

// icons
import lock from '../../utils/icons/lock.svg'

const Checkout = () => {
  const { cartItems } = useCartContext()

  // total price
  const total = cartItems.reduce((acumulador, produto) => {
    return acumulador + produto.price;
  }, 0);

  // if cart is empty return to home
  const navigate = useNavigate();
  // if (cartItems.length <= 0) {
  //   navigate({
  //     pathname: '/',
  //   })
  // }

  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75 }}
      className='font-inter flex justify-center items-center my-32'
    >
      <div className='w-4/5 flex flex-wrap items-center lg:w-3/5'>
        <div className='w-full md:w-1/2'>
          <h1>dwawd</h1>
        </div>
        <aside className='w-full px-7 pb-9 pt-16 bg-grey100 rounded-xl font-inter font-semibold text-sm md:text-base xl:text-lg md:w-1/2'>
          <header className='flex flex-col items-center gap-5'>
            <h2 className='font-inter text-grey900 text-xl font-semibold'>Total amount</h2>
            <h1 className='font-poppins text-5xl font-semibold text-primaryBlue md:text-6xl xl:text-7xl'>${total}</h1>
            <h3 className='flex items-center gap-1 text-grey500 font-inter font-semibold text-sm'>
              <span><img src={lock} alt="cadeado" /></span> Secure payment
            </h3>
          </header>

          <Hr />

          <div className=''>
            <h2 className=' text-grey500'>Order Summary</h2>
            <ul className='mt-6 list-item'>
              {cartItems.map((product, index) => (
                <li key={index} className='flex mt-2 justify-between text-black list-disc'>
                  <h1>{product.brand} <span>{product.productName}</span></h1>
                  <span>${product.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <Hr />

          <div className='text-grey500'>
            <h2 className='w-full relative'>Subtotal <span className='text-black absolute right-0'>${total}</span></h2>
            <h2 className='w-full relative'>Shipping <span className='text-black absolute right-0 line-through'>$25</span></h2>
          </div>

          <Hr />

          <h2 className='w-full relative font-inter font-semibold text-lg'>
            Total <span className='text-primaryBlue absolute right-0'>${total}</span>
          </h2>
        </aside>
      </div>
    </motion.main>
  )
}

export default Checkout