import service from "./config.services";
import { getUserId } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";

const getAllNotifications = (id) => {
  return service.get(`/notifications/${id}`);
};

const createANotification = async (id, userId, postCreator) => {
  console.log("creating the createANOtification")
  try {
    console.log("Hola", postCreator)
    console.log("hola", userId)
    if (userId === postCreator._id) {
       const response = await service.post(`/notifications/${id}`, {
        title: "New Like",
        message: `User ${userId} liked your post`,
      });
      
      console.log("is created",response)
      return response.data
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteANotification = (idNotification) => {
  return service.delete(`/notifications/${idNotification}`);
};

export { getAllNotifications, createANotification, deleteANotification };
