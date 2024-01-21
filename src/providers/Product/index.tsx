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

  useEffect(() => {
    axios.get<ProductProps[]>('https://ecommerce-cart-system-api.onrender.com/products')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductProvider