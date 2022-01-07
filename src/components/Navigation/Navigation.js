import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import "./Navigation.scss";
//import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" className="link active">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className="link active">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
