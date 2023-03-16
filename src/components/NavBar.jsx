import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  const checkActiveClass = (navInfo) => {
    console.log(navInfo);
    if (navInfo.isActive === true) {
      return "nav-active";
    } else {
      return "nav-inactive";
    }
  };

  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const userId = await getUserId();
    setUserId(userId);
  };
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/home");
  };

  if (isLoggedIn === true) {
    return (
      <div className="nav-page">
        <nav>
          <NavLink to="/home" className={checkActiveClass}>
            Home
          </NavLink>
          <NavDropdown
            title="Profile"
            id="basic-nav-dropdown"
            className="checkActiveClass nav-link nav-dropdown"
          >
            <NavDropdown.Item
              href={`/profile/${userId}`}
              className={checkActiveClass}
            >
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className={checkActiveClass}
              href={`/profile/${userId}/edit`}
            >
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={handleLogout}
              className={checkActiveClass}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/search" className={checkActiveClass}>
            Search
          </NavLink>
          <NavLink to="/information/help" className={checkActiveClass}>
            Help Center
          </NavLink>
        </nav>
        <NavLink to="/post">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn-add-post"
          >
            Add a post
          </button>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <NavLink to="/signup" className={checkActiveClass}>
            Sign Up
          </NavLink>
          <NavLink to="/signin" className={checkActiveClass}>
            Sign in
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;
