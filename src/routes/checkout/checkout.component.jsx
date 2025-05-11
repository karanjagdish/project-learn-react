import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
    CheckoutContainer,
    CheckoutHeader,
    CheckoutHeaders,
    Total,
} from "./checkout.styles";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeaders>
                <CheckoutHeader>
                    <span>Product</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Description</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Quantity</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Price</span>
                </CheckoutHeader>
                <CheckoutHeader>
                    <span>Remove</span>
                </CheckoutHeader>
            </CheckoutHeaders>
            {cartItems.map((cartItem) => (
                <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                ></CheckoutItem>
            ))}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;
