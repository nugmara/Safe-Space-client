import service from "./config.services";

const getAllComments = (id) => {
  return service.get(`/post/${id}/comments`);
};

const createAComment = async(id, newComment) => {
  try {
    const response = service.post(`/post/${id}/comments`, newComment)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
};

export { getAllComments, createAComment };
