export const endPoints = {
    auth: {
        signIn: "/auth/login",
        signUp: "/auth/register",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
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