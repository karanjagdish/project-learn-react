import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productsToAdd
    const existingCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    // if found increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
    }

    // return new array with modified cartItems / new cart Items
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1)
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );

    return cartItems.map((cartItem) => {
        if (cartItem.id === cartItemToRemove.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
            return cartItem;
        }
    });
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
