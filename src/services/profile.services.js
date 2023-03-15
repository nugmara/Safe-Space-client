import service from "./config.services";


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
