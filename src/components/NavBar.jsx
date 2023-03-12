import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function NavBar() {
  const navigate = useNavigate()
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
    navigate("/home")
  }

  if (isLoggedIn === true) {
    return (
      <div>
        <NavLink to="/home">Home</NavLink>
        <br />
        <NavLink to="/search">Search</NavLink>
        <br />
        <NavLink to="/notifications">Notifications</NavLink>
        <br />
        <NavLink to="/profile">Profile</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink to="/signup">Sign Up</NavLink>
        <br />
        <NavLink to="/signin">Sign in</NavLink>
        <br />
      </div>
    );
  }
}

export default NavBar;
