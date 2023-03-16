import service from "./config.services";
import { getUserId } from "../services/auth.services";

const getListOfAllChatServices = async() => {
  return service.get("/chats")
}

const getASpecifiChatService = (id) => {
  return service.get(`/chats/${id}`)
}

const createAChatService = (newChat) => {
  return service.post("/createChat", newChat)
}

export {
  getListOfAllChatServices,
  getASpecifiChatService,
  createAChatService
}