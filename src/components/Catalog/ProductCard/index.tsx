import { ProductProps } from '../../../types/product'

const ProductCard = (props: ProductProps) => {
  return (
    <div className='w-60 flex flex-col flex-grow basis-44 gap-3 text-lg font-inter font-medium xl:basis-auto'>
      <img className='w-full' src={props.image_url} alt={props.productName} />
      <div className='flex justify-between'>
        <h2 className='font-bold'>{props.brand} <span className='font-medium'>{props.productName}</span></h2>
        <h2>$ {props.price}</h2>
      </div>
      {props.stockQuantity === 0 ? (
        <button className='h-11 bg-lightBlue cursor-not-allowed text-white font-bold font-poppins rounded-md'>
          Out of stock
        </button>
      ) : (
        <button
          className='h-11 bg-primaryBlue text-white font-bold font-poppins rounded-md'
          onClick={() => (props.buttonEvent as (id: number) => void)(props.id)}
        >
          Add to cart
        </button>
      )}
    </div>
  )
}

export default ProductCard