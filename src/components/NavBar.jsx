import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBrain,
  faPuzzlePiece,
  faMagnifyingGlass,
  faGhost,
  faUser
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  
  const location = useLocation();
  const checkActiveClass = (navInfo) => {
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
  const { authenticateUser } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/home");
  };
  {
    return (
      <div className="nav-page">
        <nav>
          {location.pathname !== "/signup" &&
            location.pathname !== "/signin" &&
            location.pathname !== "/" && (
              <>
                <NavLink to="/home" className={checkActiveClass}>
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: "#0a0a0b" }}
                  />
                </NavLink>
                {/* <NavDropdown
                  title="Profile"
                  id="basic-nav-dropdown"
                  className="checkActiveClass nav-link nav-dropdown"
                > */}
                  {/* <NavDropdown.Divider />
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
                </NavDropdown> */}
                {/* <NavLink to="/information/help" className={checkActiveClass}>
      <FontAwesomeIcon icon={faBrain} style={{color: "#060709",}} />   </NavLink> */}
                <NavLink>
                  <FontAwesomeIcon
                    icon={faGhost}
                    style={{ color: "#090a0b" }}
                  />
                </NavLink>
                <NavLink to="/post">
                  <FontAwesomeIcon icon={faPuzzlePiece} style={{color: "#060505", fontSize: "2rem"}} />
                </NavLink>
                <NavLink to="/search" className={checkActiveClass}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#08090d" }}
                  />
                </NavLink>
                  <NavLink
                    to="/profile"
                    className={checkActiveClass}
                  >
                  <FontAwesomeIcon icon={faUser} style={{color: "#0b0c0f",}} />
                  </NavLink>
              </>
            )}
        </nav>

        {location.pathname !== "/information/help" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/signin" &&
          location.pathname !== "/profile/edit" &&
          location.pathname !== "/" && (
            <NavLink to="/information/help" className="btn-add-post ">
            <FontAwesomeIcon icon={faBrain} style={{color: "#040506",}}/>
              {" "}
            </NavLink>
          )}
      </div>
    );
  }
}

export default NavBar;
