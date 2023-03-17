import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  const location = useLocation();
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
  {
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
            <NavDropdown.Item href={`/profile`} className={checkActiveClass}>
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className={checkActiveClass}
              href={`/profile/edit`}
            >
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={handleLogout}
              className={checkActiveClass}
              href="/"
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
        {location.pathname !== "/information/help" && location.pathname !== "/signup" && location.pathname !== "/signin" && location.pathname !== "/profile/edit" && (
          <NavLink to="/post">
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="btn-add-post fa fa-pen"
            ></button>
          </NavLink>
        )}
      </div>
    );
  }
}

export default NavBar;
