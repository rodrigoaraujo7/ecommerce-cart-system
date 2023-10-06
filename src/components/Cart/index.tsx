import { useCartContext } from '../../providers/Cart'

const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <h1>Hello</h1>
      <ul className='list-none'>
        {cartItems.map(product => (
          <li>
            <h1 key={product.id}>{product.brand}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart