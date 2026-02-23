// import React from 'react'

// export default function OtpBox() {
//   return (
//     <div className='otpBox'>
//         <div className="container">
//             <div className="otpHeader">
//                 <h1>OTP Verification</h1>
//                 <p>Please enter the OTP sent to your registered email address.</p>
//             </div>
//             <div className="otpBox">
//                 <input type="text" className='box1' />
//                 <input type="text" className='box2' />
//                 <input type="text" className='box3' />
//                 <input type="text" className='box4' />
//                 <input type="text" className='box5' />
//                 <input type="text" className='box6' />
//                 <button>Verify</button>
//             </div>
//         </div>
//     </div>
//   )
// }

"use client";

import {
  useOtpMutation,
} from "@/customHooks/query/auth.query.hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";

export default function OtpBox() {
const [cookies, , removeCookie] = useCookies(["userId"]);
  const router = useRouter();
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "").slice(-1);
    e.target.value = value;
    if (value) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };

  const { mutate, isPending, data, isSuccess } = useOtpMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    let otpValue = "";
    for (let i = 1; i <= 6; i++) {
      const box = document.getElementById(`otp-${i}`);
      otpValue += box.value;
    }
    const userId = cookies.userId || "";
    console.log("User ID from cookies:", userId);

    const payload = {
      userId: userId,
      otp: otpValue,
    };

    console.log("Payload sending to API:", payload);

    mutate(payload);
  };
  useEffect(() => {
    if (isSuccess) {
      if (data?.status === true) {
        toast.success(data?.message || "OTP Verified Successfully!");
        router.push("/auth/signin");
      } else {
        toast.error(data?.message || "OTP Verification Failed.");
      }
    }
  }, [isSuccess, data]);

  return (
    <div className="min-h-[400px] w-full flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        
        <div className="mb-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-3">
            Security Check
          </h2>
          <h1 className="text-3xl font-light text-gray-900 tracking-tight mb-4">
            OTP Verification
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">
            Please enter the 6-digit code sent to your registered email address.
          </p>
        </div>

       
        <div className="flex flex-col gap-10">
          <div className="flex justify-between gap-2 sm:gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="group relative w-12 h-16 sm:w-14 sm:h-20"
              >
                <input
                  type="text"
                  id={`otp-${index}`}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full h-full bg-white/40 backdrop-blur-md border border-gray-200 rounded-2xl text-center text-xl font-light text-gray-800 outline-none transition-all duration-300
                             group-hover:bg-white/60 group-hover:border-gray-300
                             focus:bg-white focus:border-black focus:ring-4 focus:ring-black/5 focus:shadow-xl"
                />
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-300 rounded-full group-focus-within:bg-black transition-colors" />
              </div>
            ))}
          </div>

         
          <div className="space-y-6">
            <button className="group relative w-full h-[58px] bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-[0.97] cursor-pointer" onClick={handleSubmit} disabled={isPending}>
              <span className="relative z-10 font-bold tracking-[0.2em] text-xs uppercase">
                Verify Identity
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                Didn't receive the code?
              </span>
              <button
                type="button"
                className="group relative inline-flex flex-col items-center cursor-pointer"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900 transition-colors group-hover:text-blue-600">
                  Resend OTP
                </span>
                <span className="relative w-0 h-[1.5px] bg-blue-600 mt-1 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
