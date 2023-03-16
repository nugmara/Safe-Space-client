import service from "./config.services";
import { getUserId } from "../services/auth.services";

const followUser = (id) => {
    console.log(id)
    return service.patch(`/follow/userProfile/${id}/follow`)
}
export {
    followUser
}