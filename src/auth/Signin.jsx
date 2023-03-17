import { useState, useContext } from "react";
import { signinService } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";
import { NavLink, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const { authenticateUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const userCredentials = {
      username,
      password,
    };
    try {
      const response = await signinService(userCredentials);
      localStorage.setItem("authToken", response.data.authToken);

      authenticateUser();
      console.log("si vemos esto es porque el Token fue validado");
      navigate("/home");
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else if (error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        console.log(error)
      }
    }
  };
  return (
    <div className="bg-image">
      <div className="content">
      <h2>Login</h2>
        <form onSubmit={handleSignIn} className="signin">
          <div class="field-content">
            <span className="fa fa-user"></span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User name"
              required=""
            />
          </div>
          <div className="field-content">
            <span className="fa fa-lock"></span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required=""
            />
          </div>
          <div className="redirect">
          Don't have an account? <NavLink to="/signup">Sign up now!</NavLink>
          </div>
          <div className="btn-container">
          <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button >Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
