import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";

function NavBar() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState("");
  
  useEffect(() => {
    getData()
  }, [])
  const getData = async() => {
    const userId = await getUserId()
    setUserId(userId)
  }
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
        <NavLink to={`/notifications/${userId}`}>Notifications</NavLink>
        <br />
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/post">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add a post
</button>
        </NavLink>
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
