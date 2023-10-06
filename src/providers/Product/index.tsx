// react
import React, { ReactNode, useState, useEffect } from 'react';
import axios from 'axios'

// context
import ProductsContext from './ProductContext';

// types
import { ProductProps } from '../../types/product'

type IProvider = {
  children: ReactNode
}

const ProductProvider = ({ children }: IProvider) => {
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
    <ProductsContext.Provider value={data}>
      {loading ? (
        <></>
      ) : (
        <>
          {children}
        </>
      )}
    </ProductsContext.Provider>
  )
}

export default ProductProvider