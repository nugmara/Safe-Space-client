import service from "./config.services";

const getAllPostsService = () => {
  return service.get("/post");
};

const createAPost = (newPost) => {
  return service.post("/post", newPost);
};

const getDetailsFromAPost = (id) => {
  return service.get(`/post/${id}`);
};

const deleteAPost = (id) => {
  return service.delete(`/post/${id}`);
};

export { getAllPostsService, createAPost, getDetailsFromAPost, deleteAPost };
