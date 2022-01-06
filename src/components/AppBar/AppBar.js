import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import "./AppBar.scss";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function Appbar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className="header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
