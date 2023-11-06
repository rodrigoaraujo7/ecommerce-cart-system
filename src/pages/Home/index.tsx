// components
import {
  Title,
  Catalog,
  Cart
} from "../../components";

const Home = () => {
  return (
    <main
      className='font-inter flex justify-center items-center my-32 relative'>
      <div className='w-4/5 flex flex-col items-center lg:w-3/5'>
        <Title>Welcome to the <span className='text-primaryBlue'>Build ~</span></Title>
        <Catalog />
        <Cart />
      </div>
    </main>
  );
}

export default Home;
