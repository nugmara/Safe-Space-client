import service from "./config.services";

const getAllChats = () => {
  return service.get("/chats");
};

const createAConversation = (newChat) => {
  return service.post("/chats", newChat);
};

const oneToOneChat = (id) => {
  return service.get(`/chats/${id}`);
};

const deleteAChat = (id) => {
  return service.delete(`/chats/${id}`);
};

const refreshChat = (id, updateChat) => {
  return service.patch(`/chats/${id}`, updateChat);
};

export {
  getAllChats,
  createAConversation,
  oneToOneChat,
  deleteAChat,
  refreshChat,
};
