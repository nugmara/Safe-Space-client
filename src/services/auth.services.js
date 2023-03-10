import service from "./config.services";

// signup service
const signupService = (newUser) => {
  return service.post("/auth/signup", newUser);
};

// login service
const signinService = (userCredentials) => {
  return service.post("/auth/singin"), userCredentials;
};

// verify service
const verifyService = () => {
  // ! aqui tenemos que asegurarnos de pasar el token
  return service.get("/auth/verify");
};

export { signupService, signinService, verifyService };
