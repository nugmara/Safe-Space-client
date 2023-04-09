import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";
import Select from "react-select";
import  { Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons"

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleImage = (e) => {
    setImage(e.target.getAttribute("src"));
    handleCloseWhenSelectingAnImage();
  };
  const handleClickShowOrHide = () => setShow(!show)

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      firstName,
      lastName,
      email,
      password,
      image,
    };
    try {
      await signupService(newUser);
      navigate("/signin");
    } catch (error) {
      if(error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
    }
  }
  };
  const handleCloseWhenSelectingAnImage = (e) => {
    e.preventDefault();
    setImage(e.target.src);
  };
  const imageOptions = [
    {
      value: "avatar1",
      label: (
        <div>
          <img
            src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-2_jamxw0.webp"
            alt="ice-age"
            width="70px"
            onChange={handleImage}
          />
          <span>Holi</span>
        </div>
      ),
    },
    {
      value: "avatar1",
      label: (
        <div>
          <img
            src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-3_zzrpeh.webp"
            alt="ice-age"
            width="70px"
            onChange={handleImage}
          />{" "}
          <span>Holi</span>
        </div>
      ),
    },
    {
      value: "avatar1",
      label: (
        <div>
          <img
            src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357944/safe-space-app/Ice-Age-Avatars-4_nl5y36.webp"
            alt="ice-age"
            width="70px"
            onChange={handleImage}
          />
          <span>Holi</span>
        </div>
      ),
    },
    {
      value: "avatar1",
      label: (
        <div>
          <img
            src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-5_vclyp2.webp"
            alt="ice-age"
            width="70px"
            onChange={handleImage}
          />
          <span>Holi</span>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-image">
      <div className="content">
        <h2>Sign up</h2>
        <form onSubmit={handleSignup}>
          <div className="field-content">
            <span className="fa fa-user"></span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
              className="required"
            />
          </div>
          <div className="field-content">
            <span className="fa fa-user-secret"></span>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className="field-content">
            <span className="fa fa-user-circle"></span>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className="field-content">
            <span className="fa fa-envelope"></span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="field-content">
            <span className="fa fa-lock"></span>
            <InputGroup>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickShowOrHide}>
            {show ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </Button>
            </InputRightElement>

            </InputGroup>
          </div>
          <div className="avatar-title">
            Choose your Avatar!
            <Select options={imageOptions} />
          </div>
          <div className="redirect">
          Already have an account? <NavLink to="/signin">Log in!</NavLink>
          </div>
          <div className="btn-container">
          <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button>Sign up</button>  
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
