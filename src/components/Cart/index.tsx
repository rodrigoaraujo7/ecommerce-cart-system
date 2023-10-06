import { useCartContext } from '../../providers/Cart'

import deleteIcon from '../../utils/icons/delete.svg'
import CartFooter from './Footer';

const Cart = () => {
  const { cartItems, removeFromCart } = useCartContext();

  const total = cartItems.reduce((acumulador, produto) => {
    return acumulador + produto.price;
  }, 0);

  return (
    <>
      {cartItems.length >= 1 && (
        <div className='
          fixed top-0 right-0 h-full w-full bg-black text-white
          lg:w-2/5 p-12 overflow-y-auto
        '>
          <header>
            <h1 className='text-right font-bold text-3xl'>Shopping cart</h1>
          </header>
          <ul className='list-none flex flex-col gap-8 my-8 overflow-y-auto'>
            {cartItems.map((product, index) => (
              <li key={index} className='flex items-center bg-grey900 rounded-lg relative'>
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
              </li>
            ))}
          </ul>
          <CartFooter totalPrice={total} />
        </div>
      )}
    </>
  )
}

export default Cart