import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";
import Select from "react-select";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const response = await signupService(newUser);
      navigate("/signin");
      console.log(response);
    } catch (error) {
      if(error.response.status === 400){
        if(error.response.data.errorMessage.includes("email")){
          setErrorMessage("Please provide a valid email address");
        } else if(error.response.data.errorMessage.includes("password")){
          setErrorMessage("The password should have at least 8 chars, one uppercase, one lowercase and one special character");
        } else if(error.response.data.errorMessage.includes("username")){
          setErrorMessage("Username already exists");
        } else if(error.response.data.errorMessage.includes("email")){
          setErrorMessage("Email address already exists");
        }
      } else {
        console.log(error);
      }
    };
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
              placeholder="User name"
              value={username}
              onChange={handleUsername}
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
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
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
