import service from "./config.services";

const getAllComments = (id) => {
  return service.get(`/post/${id}/comments`);
};

const createAComment = (id, newComment) => {
  return service.post(`/post/${id}/comments`, newComment);
};

export { getAllComments, createAComment };
