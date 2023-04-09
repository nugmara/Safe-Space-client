import { useState, useContext } from "react";
import { signinService } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";
import { NavLink, useNavigate } from "react-router-dom";
import  { Button, InputGroup, InputRightElement, useToast } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons"

function Signin() {
  const navigate = useNavigate();
  const { authenticateUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
    const [show, setShow] = useState(false);
    const toast = useToast()

    const handleClickShowOrHide = () => setShow(!show)

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
      const errorMessage = error.response?.data?.errorMessage || "An unknown error occurred.";
      toast({
        title: "Registration Failed",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <div className="bg-image">
      <div className="content">
      <h2>Login</h2>
        <form className="signin">
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
            <InputGroup>
            <input
             type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required=""
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClickShowOrHide} className="icon">
                {show ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
              </Button>
            </InputRightElement>

            </InputGroup>
          </div>
          <div className="redirect">
          Don't have an account? <NavLink to="/signup">Sign up now!</NavLink>
          </div>
          <div className="btn-container">
          <br />
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            <button onClick={handleSignIn}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
