import service from "./config.services";
import { getUserId } from "../services/auth.services";

const getAllNotifications = (id) => {
    return service.get(`/notifications/${id}`)
}

const createANotification = async(id, userId) => {
    return service.post(`/notifications/${id}`, {
        title: "New Like",
        message: `User ${userId} liked your post`
    })
}

const deleteANotification = (idNotification) => {
    return service.delete(`/notifications/${idNotification}`)
}

export {
    getAllNotifications,
    createANotification,
    deleteANotification
}