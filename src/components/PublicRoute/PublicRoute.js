import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...propsRoute
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route Route {...propsRoute}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
