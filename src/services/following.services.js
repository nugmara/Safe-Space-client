import service from "./config.services";
import { getUserId } from "../services/auth.services";

const followUser = (id) => {
    return service.patch(`/follow/userProfile/${id}/follow`)
}
const unfollowUser = (id) => {
    return service.delete(`/follow/userProfile/${id}/follow`)
}
export {
    followUser, unfollowUser
}