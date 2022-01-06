import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function PrivateRoute({ children, ...propsRoute }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...propsRoute}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
