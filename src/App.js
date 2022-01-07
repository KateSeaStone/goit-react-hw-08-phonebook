import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { getCurrentUser } from "../src/redux/auth/auth-operations";
import { getIsGettingCurrent } from "./redux/auth/auth-selectors";
import AppBar from "./components/AppBar";
import { Container } from "react-bootstrap";
import PrivateRoute from "./components/PrivatRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeView = lazy(() => import("./views/HomeView"));
const ContactsView = lazy(() => import("./views/ContactsView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

export default function App() {
  const dispatch = useDispatch();
  const isGettingCurrent = useSelector(getIsGettingCurrent);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isGettingCurrent && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
