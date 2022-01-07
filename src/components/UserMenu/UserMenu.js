import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
    <div>
      <span className="m-lg-4">Welcome, {name} </span>
      <button
        className="btn btn-primary btn-sm"
        type="button"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
