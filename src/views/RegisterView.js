import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";

// import '../styles/pages.scss';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="page-title">Registration page</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="input_label">
          Name
          <input
            className="form_input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="input_label">
          eMail
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
          Register
        </button>
      </form>
    </div>
  );
}
