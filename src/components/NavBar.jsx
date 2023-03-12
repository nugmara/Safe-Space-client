import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div>

      <NavLink to="/signup">Sign Up</NavLink>
      <br />
      <NavLink to="signin">Sign in</NavLink>
      <br />
      <NavLink to="/home">Home</NavLink>
      <br />
      <NavLink to="/search">Search</NavLink>
      <br />
      <NavLink to="/notifications">Notifications</NavLink>
      <br />
      <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}

export default NavBar