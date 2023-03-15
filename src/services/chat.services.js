import service from "./config.services";
import { getUserId } from "../services/auth.services";

const getFriendsChatService = async() => {
  try {
    return service.get(`/chats/friends`);
    
  } catch (error) {
    console.log(error)
  }
};

const createAConversationService = async (id, newChat) => {
  try {
    const response = await service.post(`chats/${id}`, {
      sender: newChat.sender,
      receiver: newChat.receiver,
      message: newChat.message,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const oneToOneChatService = (id) => {
  return service.get(`/chats/${id}`);
};

const deleteAChatService = (id) => {
  return service.delete(`/chats/${id}`);
};



export {
  getFriendsChatService,
  createAConversationService,
  oneToOneChatService,
  deleteAChatService,
};
