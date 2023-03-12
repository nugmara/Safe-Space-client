import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function IsPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn === true) {
    return props.children;
  } else {
    <Navigate to="/signin" />;
  }
}

export default IsPrivate;
