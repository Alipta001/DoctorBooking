import { AxiosInstance } from "../axios/axios";
import { endPoints } from "../endpoints/endpoints";

export default async function login(payload){
    try{
        const response = await AxiosInstance.post(endPoints.auth.signIn, payload);
        console.log("Login API response:", response.data);
        return response.data
    } catch(error){
        console.log("Error in login API call:", error);
        throw error.response?.data || error;
}
}