import { useState, useContext } from "react";
import { signinService } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate()
  const { authenticateUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const userCredentials = {
      username,
      password,
    };
    try {
      const response = await signinService(userCredentials);
      console.log(response);
      localStorage.setItem("authToken", response.data.authToken);

      authenticateUser();
      console.log("si vemos esto es porque el Token fue validado");
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Signin;
