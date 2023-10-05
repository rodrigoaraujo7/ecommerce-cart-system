// react
import { useContext, useState } from 'react'

// components
import ProductsContext from '../Provider/productContext'
import ProductCard from './ProductCard'
import { ProductProps } from '../../types/product'

const Catalog = () => {
  const data = useContext(ProductsContext)

  const [clickedProduct, setClickedProduct] = useState<ProductProps | null>();

  const addProductToCart = (id: number) => {
    const clickedProduct = data.find((product) => product.id === id);
    setClickedProduct(clickedProduct);

    console.log(clickedProduct)
  };

  return (
    <div className='w-full flex flex-wrap justify-center gap-12 mt-20'>
      {data.map(product => (
        <ProductCard
          id={product.id}
          brand={product.brand}
          productName={product.productName}
          image_url={product.image_url}
          price={product.price}
          stockQuantity={product.stockQuantity}
          buttonEvent={addProductToCart}
        />
      ))}
    </div>
  )
}

export default Catalog