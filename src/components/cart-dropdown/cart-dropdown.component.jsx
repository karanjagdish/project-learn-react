import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
