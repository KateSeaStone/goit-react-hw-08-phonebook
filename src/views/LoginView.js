import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";
//import '../styles/pages.scss';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.warn(`This type of name - ${name} doesn't work out`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginWrapper">
      <h1 className="page-title">Login Page</h1>

      <form className="loginForm" onSubmit={handleSubmit} autoComplete="off">
        <label className="input_label">
          Mail
          <input
            className="form_input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="input_label">
          Password
          <input
            className="form_input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
