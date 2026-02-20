import { error } from "console"
import { AxiosInstance } from "../axios/axios"
import { endPoints } from "../endpoints/endpoints"

export default async function RegisterFunction(payload) {
    try{
        const response = await AxiosInstance.post(`${endPoints.auth.signUp}`, payload)
        console.log("Register API response:", response.data);
        return response.data;
    }catch(err){
            console.log("Error in register API call:",err)
        }
}