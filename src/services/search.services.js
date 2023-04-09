import service from "./config.services";

const searchUsersService = (query) => {
  return service.get(`/search?search=${encodeURIComponent(query)}`)
};

export { searchUsersService }
