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
import { Cookies } from "react-cookie";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import { toast } from "sonner";
import RegisterFunction from "@/api/functions/register.api";

export const useSignUpMutation = () => {
    const cookies = new Cookies();
    const { queryClient } = useGlobalHooks();

    return useMutation({
        mutationFn: RegisterFunction,
        onSuccess: (response) => {
            // Destructure with fallbacks
            const { status, message } = response || {};

            if (status === true || status === "true") {
                toast.success(message || "Registration successful!");
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