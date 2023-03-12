import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

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
      navigate("/signin")
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseWhenSelectingAnImage = (e) => {
    e.preventDefault();
    setImage(e.target.src);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup}>
        <label>Username: </label>
        <input type="text" name="username" value={username} onChange={handleUsername}/>
        <label>First Name: </label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName}/>

        <label>Last Name: </label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName}/>

        <label>Email: </label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword}
        />
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Select your avatar!
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Which you will be?
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <a href="" onClick={handleCloseWhenSelectingAnImage}>
                  <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-1_yeuzft.webp" alt="ice-age" width="70px" onChange={handleImage}/>
                </a>
                <a href="" onClick={handleCloseWhenSelectingAnImage}>
                  <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-2_jamxw0.webp" alt="ice-age" width="70px" onChange={handleImage}/>
                </a>
                <a href="" onClick={handleCloseWhenSelectingAnImage}>
                  <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-3_zzrpeh.webp" alt="ice-age" width="70px" onChange={handleImage} />
                </a>
                <a href="" onClick={handleCloseWhenSelectingAnImage}>
                  <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357944/safe-space-app/Ice-Age-Avatars-4_nl5y36.webp" alt="ice-age" width="70px" onChange={handleImage}
                  />
                </a>
                <a href="" onClick={handleCloseWhenSelectingAnImage}>
                  <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-5_vclyp2.webp" alt="ice-age" width="70px" onChange={handleImage}/>
                </a>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
