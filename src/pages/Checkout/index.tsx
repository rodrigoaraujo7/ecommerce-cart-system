// provider
import { useCartContext } from '../../providers/Cart'

// components
import { Title } from "../../components"

// framer motion
import { motion } from 'framer-motion'

const Checkout = () => {
  const { cartItems } = useCartContext()

  return (
    <motion.main className='font-inter flex justify-center items-center my-32 relative'>
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