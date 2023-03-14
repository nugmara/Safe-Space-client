import service from "./config.services";

const searchUsers = async (query) => {
  try {
    const response = await service.post("/search", { query });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { searchUsers };
