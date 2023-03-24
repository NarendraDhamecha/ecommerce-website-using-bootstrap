import React, { useContext } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import "./Header.css";
import CartContext from "../store/Cart-contex";
import AuthContext from "../store/auth-contex";

const HeaderNavbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  const totalQuantity = cartCtx.items.reduce((sum, currNum) => {
    return sum + Number(currNum.quantity);
  }, 0);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={location.pathname}>
          E-COMMERCE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/store">
                STORE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact_us">
                CONTACT US
              </NavLink>
            </li>
            {!authCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                  LOG IN
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {location.pathname === "/store" && (
              <li className="nav-item">
                <button
                  className="btn btn-outline-secondary me-3"
                  variant="outline-secondary"
                  onClick={props.onShowCart}
                >
                  <span className="icon"></span>
                  <span>Cart</span>
                  <span className="badge">{totalQuantity}</span>
                </button>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li className="nav-item">
                <button onClick={logoutHandler} className="btn btn-danger">
                  LOG OUT
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
