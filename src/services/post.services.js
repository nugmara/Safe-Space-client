import service from "./config.services";
import { getUserId } from "../services/auth.services";

const getAllPostsService = () => {
  return service.get("/post")
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

const likeAPost = (id) => {
  return service.patch(`/post/${id}/like`)
}

export { getAllPostsService, createAPost, getDetailsFromAPost, deleteAPost, likeAPost };
