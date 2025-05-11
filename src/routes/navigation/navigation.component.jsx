import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
    LogoContainer,
    NavLink,
    NavLinks,
    NavigationContainer,
} from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

/**
 * Outlet lets you display nested routes contents along with
 * the contents of the current component, ex. /nav/route1 and /nav/route2
 * will share all content except the Outlet which will be replaced by the
 * content of route1 component and route2 component
 */

const Navigation = () => {
    // const {
    //   currentUser,
    //   // setCurrentUser
    // } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const currentUser = useSelector(selectCurrentUser);

    const signOutHandler = async () => {
        await signOutUser();
        // setCurrentUser(null);
    };

    return (
        // <div>
        // Fragement avoids the need to return a single top level element
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
        // </div>
    );
};

export default Navigation;
