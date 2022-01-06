import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCurrentUser } from "../src/redux/auth/auth-operations";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
import "./App.scss";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}
