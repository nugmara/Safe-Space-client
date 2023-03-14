import service from "./config.services";
import { getUserId } from "../services/auth.services";

const getProfileDetailsService = (id) => {
    return service.get(`/profile/${id}`)
}

const updateProfileService = (id) => {
    return service.patch(`/profile/${id}/edit`)
}

export {
    getProfileDetailsService,
    updateProfileService
}
