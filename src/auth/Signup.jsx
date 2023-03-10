import { useState } from "react";

function Signup() {
  const [image, setImage] = useState("");

  const avatars = [
    "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-1_yeuzft.webp",
    "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-2_jamxw0.webp",
    "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-3_zzrpeh.webp",
    "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357944/safe-space-app/Ice-Age-Avatars-4_nl5y36.webp",
    "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678357943/safe-space-app/Ice-Age-Avatars-5_vclyp2.webp",
  ];

  const handleImage = (e) => {
    setImage(e.target.value);
  };
  return (
    <div>
      <h1>Sign up</h1>

      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={undefined}
          onChange={undefined}
        />

        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={undefined}
          onChange={undefined}
        />

        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={undefined}
          onChange={undefined}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={undefined}
          onChange={undefined}
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={undefined}
          onChange={undefined}
        />

        <select name="image" value={image} onChange={handleImage} style={{backgroundImage: `url(${image})`}}>
          <option value="">Select an image</option>
          {avatars.map((eachAvatar) => (
            <option key={eachAvatar} value={eachAvatar} style={{backgroundImage: `url(${eachAvatar})`}}>
              {/* <img
                src={eachAvatar}
                alt="ice-age-avatar"
                width="100px"
              />  */}
             {eachAvatar}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Signup;
