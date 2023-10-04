import { useState, useEffect } from 'react'
import axios from 'axios'

interface Product {
  id: number,
  brand: string,
  productName: string,
  price: number,
  stockQuantity: number | boolean,
  image_url: string
}

const App = () => {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<Product[]>('http://localhost:3000/products')
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
    <main>
      <h1>Hello World</h1>
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.brand}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
