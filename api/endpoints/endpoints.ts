export const endPoints = {
    auth: {
        signIn: "/auth/login",
        signUp: "/auth/register",
        otp: "/auth/verify_otp"
    },
    user: {
        profile: "/user/profile",
        update: "/user/update",
        delete: "/user/delete",
    },
    appointments: {
        create: "/appointments/create",
        list: "/appointments/list",
        update: "/appointments/update",
        delete: "/appointments/delete",
    },
    doctors: {
        list: "/doctors/list",
        details: "/doctors/details",
    },
}