import service from "./config.services";

const searchUsersService = () => {
  return service.get("/search")
};

export { searchUsersService }
