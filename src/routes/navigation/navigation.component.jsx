import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";

import "./navigation.styles.scss";

/**
 * Outlet lets you display nested routes contents along with
 * the contents of the current component, ex. /nav/route1 and /nav/route2
 * will share all content except the Outlet which will be replaced by the
 * content of route1 component and route2 component
 */

const Navigation = () => {
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
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
    // </div>
  );
};

export default Navigation;
