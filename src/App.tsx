// react
import { useState, useEffect } from 'react'
import axios from 'axios'

// components
import Title from './components/Title'
import ProductCard from './components/Catalog/ProductCard'

// types
import { ProductProps } from './types/product'

const App = () => {
  const [data, setData] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<ProductProps[]>('http://localhost:3000/products')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className='font-inter flex justify-center items-center my-32'>
      <div className='w-4/5 flex flex-col items-center lg:w-3/5'>
        <Title>Welcome to the <span className='text-primaryBlue'>Build ~</span></Title>
        <div className='w-full flex flex-wrap justify-center gap-12 mt-20'>
          {data.map(product => (
            <ProductCard
              id={product.id}
              brand={product.brand}
              productName={product.productName}
              image_url={product.image_url}
              price={product.price}
              stockQuantity={product.stockQuantity}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
