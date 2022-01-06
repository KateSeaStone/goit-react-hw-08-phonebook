import { NavLink } from "react-router-dom";
//import routes from '../../routes';
import "./AuthNavigation.scss";

const AuthNavigation = () => (
  <div className="authNavigation">
    <NavLink to="/register" className="link" activeClassName="activeLink">
      Register
    </NavLink>
    <NavLink to="/login" className="link" activeClassName="activeLink">
      Login
    </NavLink>
  </div>
);

export default AuthNavigation;
