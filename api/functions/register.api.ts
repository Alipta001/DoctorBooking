import { AxiosInstance } from "../axios/axios"
import { endPoints } from "../endpoints/endpoints"

export default async function RegisterFunction(payload) {
    try {
        const response = await AxiosInstance.post(`${endPoints.auth.signUp}`, payload);
        console.log("Register API response:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error in register API call:", err);
        
        // This is the fix: Re-throw the error so mutate() catches it
        // We look for the server's error message first, then fallback to the general error
        throw err.response?.data || err;
    }
}