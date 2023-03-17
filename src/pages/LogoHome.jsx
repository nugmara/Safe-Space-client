import { Link } from "react-router-dom";

function LogoHome() {
  return (
    <div className="App Appi just-logo">
      <div className="logo-button" to="/starter">
        <img
          src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1679014910/safe-space-app/Captura_de_pantalla_2023-03-17_020115-removebg-preview_z0xlku.png"
          alt="logo"
        />
        <img
          src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1679014458/safe-space-app/94-944778_22-blue-paint-brush-stroke-blue-brush-paint-removebg-preview_w6yh0q.png"
          alt=""
        />
      </div>
      <Link to="/signup" className="btn-signup btn-container-login">
        <button >Sign Up</button>
      </Link>
      <Link to="/signin" className="btn-login btn-container-sign">
        <button>Log in</button>
      </Link>
    </div>
  );
}

export default LogoHome;
