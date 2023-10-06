import { createContext } from 'react';

// types
import { ProductProps } from '../../types/product'

const ProductsContext = createContext<ProductProps[]>([]);

export default ProductsContext;