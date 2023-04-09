import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";
import Select from "react-select";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  SelectField,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faUser,
  faSignature,
  faEnvelope,
  faLock,
  faOtter,
} from "@fortawesome/free-solid-svg-icons";


function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [image, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleClickShowOrHide = () => setShow(!show);

  const imageDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/webp"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "safe-space-images");
      data.append("cloud_name", "dhtrxjdas");
      fetch("https://api.cloudinary.com/v1_1/dhtrxjdas/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
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
      await signupService(newUser);
      navigate("/signin");
      toast({
        title: "Registration Succesful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.errorMessage || "An unknown error occurred.";
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
        <h2>Sign up</h2>
        <form>
          <div className="field-content">
            <span>
              <FontAwesomeIcon icon={faUser} />{" "}
            </span>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="field-content">
            <span>
              <FontAwesomeIcon icon={faSignature} />{" "}
            </span>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className="field-content">
            <span>
              <FontAwesomeIcon icon={faOtter} />
            </span>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className="field-content">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
            </span>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="field-content">
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClickShowOrHide}
                  className="icon"
                >
                  {show ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="avatar-title">
            <FormControl>
              <FormLabel>Upload your Avatar!</FormLabel>
              <Input
                type="file"
                p={1.5}
                accept="image/"
                onChange={(e) => imageDetails(e.target.files[0])}
              />
            </FormControl>
          </div>
          <div className="redirect">
            Already have an account? <NavLink to="/signin">Log in!</NavLink>
          </div>
          <div className="btn-container">
            <br />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

            <Button isLoading={loading} onClick={handleSignup}>
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
