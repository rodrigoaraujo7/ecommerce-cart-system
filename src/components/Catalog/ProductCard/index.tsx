import { ProductProps } from '../../../types/product'

const ProductCard = ({ id, brand, productName, price, stockQuantity, image_url }: ProductProps) => {
  return (
    <div className='w-72 flex flex-col flex-grow basis-44 gap-3 text-xl font-inter font-medium xl:basis-auto'>
      <img className='w-full' src={image_url} alt={productName} />
      <div className='flex justify-between'>
        <h2 className='font-bold'>{brand} <span>{productName}</span></h2>
        <h2>$ {price}</h2>
      </div>
      {stockQuantity === 0 ? (
        <button className='h-11 bg-lightBlue cursor-not-allowed text-white font-bold font-poppins rounded-md'>
          Out of stock
        </button>
      ) : (
        <button className='h-11 bg-primaryBlue text-white font-bold font-poppins rounded-md'>
          Add to cart
        </button>
      )}
    </div>
  )
}

export default ProductCard