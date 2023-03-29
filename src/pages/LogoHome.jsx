import { Link } from "react-router-dom";

function LogoHome() {
  return (
    <div className="App Appi just-logo bg-image">
    
      <div className="content">
      <p>cFEYBHDSJKKFHGEDAWSJILDHFKKSJKLF <br />
      ftghkj.gkfjdhsetdrfghkhkgftdrhtyugkil <br />
      jchgghkjkhgkfguhugyufkfuygilhu <br />
      asdfghjklkjhgfdsaASDFGHJKJHGFD <br />
      sdfghjkjhgfdfghjkjhgfdfghjkjhgffghj <br />
      dfghjkjhgfdfghjkjhgfdfghj <br />
      sdfghjhgfdsdfgh <br />

      </p>
      
         {/* <img
          src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1679046853/safe-space-app/LOGO-removebg-preview_xmyotl.png"
          alt="logo"
        />  */}
        <div>
      <Link to="/signup" className="btn-signup btn-container-login">
        <button >Sign Up</button>
      </Link>
      <Link to="/signin" className="btn-login btn-container-sign">
        <button>Log in</button>
      </Link>
      </div>
      </div>
    </div>
  );
}

export default LogoHome;
