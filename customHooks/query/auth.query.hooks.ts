// import { useMutation, UseMutationResult } from "@tanstack/react-query";
// import { Cookies } from "react-cookie";
// import { useGlobalHooks } from "../globalHooks/globalHooks";
// import { toast } from "sonner";
// import RegisterFunction from "@/api/functions/register.api";

// //custom quary

// export const useSignUpMutation = () => {
//     const cookies = new Cookies()
//     const { queryClient } = useGlobalHooks()
//     return useMutation({
//         mutationFn: RegisterFunction,
//         onSuccess: (response) => {
//             const { token, status, message } = response || {}
//             if (status === true) {
//                 toast.success(message)
//             }
//             else {
//                 toast.error(message)
//             }
//             queryClient.invalidateQueries({ queryKey: ["REGISTER"] })
//         },
//         onError: (error) => {
//             console.log("error")
//         }
//     })
// }



import { useMutation } from "@tanstack/react-query";
import { Cookies, useCookies } from "react-cookie";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import { toast } from "sonner";
import RegisterFunction from "@/api/functions/register.api";
import verifyOtp from "@/api/functions/otp.api";
import login from "@/api/functions/login.api";

//register
export const useSignUpMutation = () => {
    const [cookies, setCookie] = useCookies(["userId"]);
    const { queryClient } = useGlobalHooks();

    return useMutation({
        mutationFn: RegisterFunction,
        onSuccess: (response) => {
            // Destructure with fallbacks
            const { status, message, data } = response || {};

            if (status === true || status === "true") {
                toast.success(message || "Registration successful!");
                setCookie("userId", data?.id || "", { path: "/" });
                // Only invalidate if you have a "User List" or "Profile" query to refresh
                queryClient.invalidateQueries({ queryKey: ["USER_DATA"] }); 
            } else {
                toast.error(message || "An unexpected error occurred.");
            }
        },
        onError: (error) => {
            // This catches the 'throw' from your RegisterFunction
            const errorMessage = error?.message || "Server connection failed";
            toast.error(errorMessage);
            console.error("Mutation Error:", error);
        }
    });
}

//otp
export const useOtpMutation = () => {
    const { queryClient } = useGlobalHooks();

    return useMutation({
        mutationFn: verifyOtp,
        onSuccess: (response) => {
            // Destructure with fallbacks
            const { status, message } = response || {};

            if (status === true || status === "true") {
                toast.success(message || "Otp Verified Successfully!");
                // Only invalidate if you have a "User List" or "Profile" query to refresh
                queryClient.invalidateQueries({ queryKey: ["USER_DATA"] }); 
            } else {
                toast.error(message || "An unexpected error occurred.");
            }
        },
        onError: (error) => {
            // This catches the 'throw' from your RegisterFunction
            const errorMessage = error?.message || "Server connection failed";
            toast.error(errorMessage);
            console.error("Mutation Error:", error);
        }
    });
}

//signIn
export const useSignInMutation = () => {
    const [cookies, setCookie] = useCookies(["token"]);
    const { queryClient } = useGlobalHooks();

    return useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            // Destructure with fallbacks
            const { status, message, data } = response || {};

            if (status === true || status === "true") {
                toast.success(message || "Login successful!");
                setCookie("token", data?.token || "", { path: "/" });
                queryClient.invalidateQueries({ queryKey: ["USER_DATA"] }); 
            } else {
                toast.error(message || "An unexpected error occurred.");
            }
        },
        onError: (error) => {
            const errorMessage = error?.message || "Server connection failed";
            toast.error(errorMessage);
            console.error("Mutation Error:", error);
        }
    });
}
