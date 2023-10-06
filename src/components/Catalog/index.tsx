// react
import { useContext, useState } from 'react'
import { useCartContext } from '../../providers/Cart'

// components
import ProductsProvider from '../../providers/Product/ProductContext'
import ProductCard from './ProductCard'
import { ProductProps } from '../../types/product'

const Catalog = () => {
  const { cartItems, addToCart } = useCartContext();

  const data = useContext(ProductsProvider)

  return (
    <ul className='w-full flex flex-wrap justify-center gap-12 mt-20 list-none'>
      {data.map(product => (
        <li key={product.id}>
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
    </ul>
  )
}

export default Catalog