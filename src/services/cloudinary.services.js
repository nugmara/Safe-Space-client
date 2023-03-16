import service from "./config.services";

const uploadImageService = () => {
  return service.get("/upload");
};

export { uploadImageService };