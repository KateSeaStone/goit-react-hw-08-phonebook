import { NavLink } from "react-router-dom";
//import routes from '../../routes';
import "./AuthNavigation.scss";

const AuthNavigation = () => (
  <div className="authNavigation">
    <NavLink to="/register" className=" link active">
      Register
    </NavLink>
    <NavLink to="/login" className="link active">
      Login
    </NavLink>
  </div>
);

export default AuthNavigation;
