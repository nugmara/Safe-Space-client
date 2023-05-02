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
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation();
  const checkActiveClass = (navInfo) => {
    if (isClicked && location.pathname === navInfo.to) {
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
              <NavLink to="/home" className={checkActiveClass({ isActive: true, to: "/home" })} onClick={() => setIsClicked(true)}>
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: isClicked && location.pathname === "/home" ? "#000000" : "#808080" }}
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
                <NavLink className={checkActiveClass({ isActive: true, to: "/undefined" })} onClick={() => setIsClicked(true)}>
                  <FontAwesomeIcon
                    icon={faGhost}
                    style={{ color: isClicked && location.pathname === "/undefined" ? "#000000" : "#808080"  }}
                  />
                </NavLink>
                <NavLink to="/post" className={checkActiveClass({ isActive: true, to: "/post" })} onClick={() => setIsClicked(true)}>
                  <FontAwesomeIcon className="puzzle" icon={faPuzzlePiece} style={{color: isClicked && location.pathname === "/post" ? "#ffffff" : "#ffffff"}} />
                </NavLink>
                <NavLink to="/search" className={checkActiveClass({ isActive: true, to: "/search" })} onClick={() => setIsClicked(true)}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: isClicked && location.pathname === "/search" ? "#000000" : "#808080" }}
                  />
                </NavLink>
                  <NavLink
                    to="/profile"
                    className={checkActiveClass({ isActive: true, to: "/profile" })} onClick={() => setIsClicked(true)}>
                  
                  <FontAwesomeIcon icon={faUser} style={{color: isClicked && location.pathname === "/profile" ? "#000000" : "#808080"}} />
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
