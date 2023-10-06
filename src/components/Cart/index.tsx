// components
import CartFooter from './Footer';

// providers
import { useCartContext } from '../../providers/Cart'

// icons
import cartIcon from '../../utils/icons/cart.svg'
import deleteIcon from '../../utils/icons/delete.svg'

// framer motion
import { motion, useCycle, AnimatePresence } from "framer-motion";

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 },
};

// animations for each item navigtaion
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1
    }
  }
};
const Cart = () => {
  const { cartItems, removeFromCart } = useCartContext();

  const total = cartItems.reduce((acumulador, produto) => {
    return acumulador + produto.price;
  }, 0);

  // animation
  const [open, cycleOpen] = useCycle(false, true);
  const handleClick = () => cycleOpen()

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={
          `fixed z-10 top-4 right-4 w-24 h-24 rounded-full flex justify-center items-center transition-all 
          ${open ? 'bg-black hover:bg-grey900' : 'bg-primaryBlue hover:bg-lightBlue'}`
        }
        initial={{ // initial position
          opacity: 0,
        }}
        animate={{ // when active the animation
          opacity: 1,
          transition: { duration: 1, delay: 3 }
        }}
      >
        <img src={cartIcon} alt="cart icon" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.aside className='
                fixed top-0 right-0 h-full w-full bg-black text-white
                lg:w-2/5 p-12 overflow-y-auto
              '
            initial={{ // initial position
              x: '100%',
            }}
            animate={{ // when active the animation
              x: 0,
              transition: { duration: 0.45 }
            }}
            exit={{ // when close the header
              x: '100%',
              transition: { delay: .45, duration: 0.4 }
            }}>

            <header>
              <h1 className='font-bold text-3xl'>Shopping cart</h1>
            </header>

            <motion.ul
              initial="closed" animate="open" exit="closed" variants={sideVariants}
              className='list-none flex flex-col gap-8 my-8 overflow-y-auto'
            >
              {cartItems.map((product, index) => (
                <motion.li key={index} variants={itemVariants} className='flex items-center bg-grey900 rounded-lg relative'>
                  <img src={product.image_url} alt={product.productName} className='w-28' />
                  <div className='ml-4'>
                    <h2 className='font-bold'>{product.brand} <span className='font-medium'>{product.productName}</span></h2>
                    <h2 className='font-medium text-grey500 underline'>$ {product.price}</h2>
                  </div>
                  <button
                    onClick={() => removeFromCart(product)}
                    className='text-right absolute right-4'
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <CartFooter totalPrice={total} />

          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart