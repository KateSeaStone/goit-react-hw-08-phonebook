import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";

const styles = {
  divWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "30px",
  },

  button: {
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    padding: "10px",
    transition: " 0.3s",
    backgroundColor: "teal",
    marginLeft: "10px",
    fontWeight: "600",
    color: "yellow",
  },

  hover: {
    backgroundColor: "darkRed",
    color: "white",
    transition: "0.3s",
    transform: "scale(1.1)",
  },

  img: {
    marginRight: "15px",
  },

  span: {
    fontSize: "24px",
    marginRight: "10px",
    color: "blue",
  },
};

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
    <div style={styles.divWrapper}>
      <span style={styles.span}>Welcome, {name} </span>
      <button
        className="logoutButton"
        style={styles.button}
        type="button"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
