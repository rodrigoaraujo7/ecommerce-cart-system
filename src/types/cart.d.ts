export interface CartContextType {
  cartItems: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (product: ProductProps) => void;
}