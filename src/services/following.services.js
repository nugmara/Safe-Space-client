import service from "./config.services";
import { getUserId } from "../services/auth.services";

const followUser = (id) => {
    return service.post(`/follow/${id}`)
}

const followers = (id) => {
    return service.post(`/followers/${id}`)
}

export {
    followUser, followers
}