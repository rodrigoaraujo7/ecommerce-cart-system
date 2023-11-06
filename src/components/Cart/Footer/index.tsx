// react-router
import { Link } from 'react-router-dom'

// icons
import arrow from '../../../utils/icons/arrow.svg'

// types
interface CartFooterProps {
  totalPrice: number
}

const CartFooter = (props: CartFooterProps) => {

  return (
    <footer className="bottom-0 left-0 right-0 font-bold w-full bg-black">
      <h1 className="text-5xl mb-2">Total</h1>
      <hr className="border-1 border-grey900" />
      <h1 className="text-5xl my-6">$ {props.totalPrice}</h1>
      <Link
        to="/checkout"
        className="h-11 w-full flex justify-between items-center px-5 bg-primaryBlue text-white text-2xl font-semibold font-poppins rounded-md"
      >
        Checkout
        <img src={arrow} alt="" />
      </Link>
    </footer>
  )
}

export default CartFooter