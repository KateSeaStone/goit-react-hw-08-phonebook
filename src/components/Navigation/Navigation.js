import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation(props) {
  return (
    <nav>
      <NavLink exact to="/" className="link" activeClassName="activeLink">
        Home
      </NavLink>

      <NavLink to="/contacts" className="link" activeClassName="activeLink">
        Contacts
      </NavLink>
    </nav>
  );
}
