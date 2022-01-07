import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";

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
    <div>
      <h2 className="page-title">Login Page</h2>

      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group mb-2">
          <label>
            Email
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group mb-2">
          <label>
            Password
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
