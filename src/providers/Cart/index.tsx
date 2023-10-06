import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductProps } from '../../types/product';
import ProductsProvider from '../../providers/Product/ProductContext'

interface CartContextType {
  cartItems: ProductProps[];
  addToCart: (product: ProductProps) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

// creating a hook
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext deve ser usado dentro de um CartProvider');
  }
  return context;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  // importing the db.json
  const data = useContext(ProductsProvider)

  // creating the function to add the product to cart
  const addToCart = (id: any) => {
    // picking the data of the clicked object
    const clickedProduct: any = data.find((product) => product.id === id);

    if (clickedProduct) {
      setCartItems([...cartItems, clickedProduct]);
      console.log(cartItems)
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
