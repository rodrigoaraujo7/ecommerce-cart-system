// providers
import CartProvider from './providers/Cart';
import ProductProvider from './providers/Product';

// components
import Title from './components/Title';
import Catalog from './components/Catalog'
import Cart from './components/Cart';

const App = () => {
  return (
    <ProductProvider>
      <main className='font-inter flex justify-center items-center my-32 relative'>
        <div className='w-4/5 flex flex-col items-center lg:w-3/5'>
          <Title>Welcome to the <span className='text-primaryBlue'>Build ~</span></Title>
          <CartProvider>
            <Catalog />
            <Cart />
          </CartProvider>
        </div>
      </main>
    </ProductProvider>
  );
}

export default App;
