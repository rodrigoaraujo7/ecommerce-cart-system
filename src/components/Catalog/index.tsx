// react
import { useContext } from 'react'
import { useCartContext } from '../../providers/Cart'

// components
import ProductsProvider from '../../providers/Product/ProductContext'
import ProductCard from './ProductCard'

// framermotion
import { motion } from 'framer-motion'

const Catalog = () => {
  const { addToCart } = useCartContext();

  const data = useContext(ProductsProvider)

  return (
    <motion.ul
      className='w-full flex flex-wrap justify-center gap-12 mt-20 list-none'
      initial={{ // initial position
        opacity: 0,
      }}
      animate={{ // when active the animation
        opacity: 1,
        transition: { duration: 1.25 }
      }}
    >
      {data.map((product, index) => (
        <li key={index}>
          <ProductCard
            id={product.id}
            brand={product.brand}
            productName={product.productName}
            image_url={product.image_url}
            price={product.price}
            stockQuantity={product.stockQuantity}
            buttonEvent={addToCart}
          />
        </li>
      ))}
    </motion.ul>
  )
}

export default Catalog