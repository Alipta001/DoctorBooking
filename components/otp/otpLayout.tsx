// import React from 'react'
// import OtpBox from './otpBox'

// export default function OtpLayout() {
//   return (
//     <div className='otpLayout'>
//         <h1>OTP Layout</h1>
//         <p>This is the OTP layout component.</p>
//         <OtpBox />
//     </div>
//   )
// }



import React from 'react'
import OtpBox from './otpBox'

export default function OtpLayout() {
  return (
    <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden p-6'> 
      <div className="backgroundImg absolute inset-0 -z-10">
        <img
          src="/images/login2.jpeg"
          alt="Login Background"
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20">
        
        <div className="mb-10 text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">
            Secure Access
          </h2>
          <p className="text-2xl font-light text-gray-900">Verify OTP</p>
        </div>

        <OtpBox />
        
      </div>
    </div>
  )
}