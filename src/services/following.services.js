import service from "./config.services";
import { getUserId } from "../services/auth.services";

const followUser = (id) => {
    return service.post(`/${id}`)
}

const unfollow = (id) => {
    return service.delete(`/${id}/unfollow`)
}

export {
    followUser, unfollow
}