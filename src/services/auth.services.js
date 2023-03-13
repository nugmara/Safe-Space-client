import service from "./config.services";

// signup service
const signupService = (newUser) => {
  return service.post("/auth/signup", newUser);
};

// login service
const signinService = (userCredentials) => {
  return service.post("/auth/signin", userCredentials);
};

// verify service
const verifyService = () => {
  // ! aqui tenemos que asegurarnos de pasar el token
  return service.get("/auth/verify");
};

const getUserId = async () => {
  try {
    const response = await verifyService()
    const userId = response.data._id
    return userId
  } catch (error) {
    console.log(error);
  }
};

export { signupService, signinService, verifyService, getUserId };
