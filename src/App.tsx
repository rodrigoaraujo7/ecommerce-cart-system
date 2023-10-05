// components
import Provider from './components/Provider';
import Title from './components/Title';
import Catalog from './components/Catalog'

const App = () => {
  return (
    <Provider>
      <main className='font-inter flex justify-center items-center my-32'>
        <div className='w-4/5 flex flex-col items-center lg:w-3/5'>
          <Title>Welcome to the <span className='text-primaryBlue'>Build ~</span></Title>
          <Catalog />
        </div>
      </main>
    </Provider>
  );
}

export default App;
