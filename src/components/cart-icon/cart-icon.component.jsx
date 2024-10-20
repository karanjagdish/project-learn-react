import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

export const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = (event) => {
    setIsCartOpen((current) => !current);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
