import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import "./Navigation.scss";

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink exact to="/" className="link" activeClassName="activeLink">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className="link" activeClassName="activeLink">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
