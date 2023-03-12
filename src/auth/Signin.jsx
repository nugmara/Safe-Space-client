import { useState, useContext } from "react";
import { signinService } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";

function Signin() {
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
      console.log(response);
      localStorage.setItem("authToken", response.data.authToken);

      authenticateUser();
      console.log("si vemos esto es porque el Token fue validado");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
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
