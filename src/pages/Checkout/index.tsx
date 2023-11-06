// provider
import { useCartContext } from '../../providers/Cart'

import { useNavigate } from 'react-router-dom'

// components
import { Title } from "../../components"

// framer motion
import { motion } from 'framer-motion'

const Checkout = () => {
  const { cartItems } = useCartContext()

  // if cart is empty return to home
  const navigate = useNavigate();
  if (cartItems.length <= 0) {
    navigate({
      pathname: '/',
    })
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75 }}
      className='font-inter flex justify-center items-center my-32'
    >
      <div className='w-4/5 flex flex-col items-center lg:w-3/5'>
        <Title>Checkout</Title>
        <ul>
          {cartItems.map((product, index) => (
            <li key={index}>
              <h1>{product.productName}</h1>
            </li>
          ))}
        </ul>
      </div>
    </motion.main>
  )
}

export default Checkout