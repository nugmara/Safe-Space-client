import service from "./config.services";



const getProfileDetailsService = () => {
    return service.get(`/profile`)
}

const getProfileDetailsFromAFriendService = (id) => {
    return service.get(`/profile/${id}`)
}

const updateProfileService = (updateProfile) => {
    return service.patch(`/profile/edit`, updateProfile)
}

export {
    getProfileDetailsService,
    getProfileDetailsFromAFriendService,
    updateProfileService
}
