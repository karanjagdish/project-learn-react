import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = (event) => {
    setIsCartOpen((current) => !current);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
