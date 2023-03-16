import service from "./config.services";
import { getUserId } from "../services/auth.services";

const followUser = (id) => {
    console.log(id)
    return service.patch(`/userProfile/${id}/follow`)
}
export {
    followUser
}