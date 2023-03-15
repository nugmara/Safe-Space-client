import service from "./config.services";


const getProfileDetailsService = (id) => {
    return service.get(`/profile/${id}`)
}

const updateProfileService = (id, updateProfile) => {
    return service.patch(`/profile/${id}/edit`, updateProfile)
}

export {
    getProfileDetailsService,
    updateProfileService
}
