import { AxiosInstance } from "../axios/axios"
import { endPoints } from "../endpoints/endpoints"

export default async function verifyOtp(payload){
    try{
        const response = await AxiosInstance.post(endPoints.auth.otp, payload)
        return response.data
    } catch(error){
        console.log("Error verifying OTP:", error);
    }
}