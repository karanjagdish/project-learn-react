import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";

import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

/**
 * Outlet lets you display nested routes contents along with
 * the contents of the current component, ex. /nav/route1 and /nav/route2
 * will share all content except the Outlet which will be replaced by the
 * content of route1 component and route2 component
 */

const Navigation = () => {
  const {
    currentUser,
    // setCurrentUser
  } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };

  return (
    // <div>
    // Fragement avoids the need to return a single top level element
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
    // </div>
  );
};

export default Navigation;
