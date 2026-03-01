// import React from 'react'
// import RegisterForm from './registerForm'

// export default function RegisterLayout() {
//   return (
//    <div className="loginLayout relative min-h-screen w-full flex items-center justify-center overflow-hidden">
//       <div className="backgroundImg absolute inset-0 -z-10">
//         <img
//           src="/images/login2.jpeg"
//           alt="Login Background"
//           className="w-full h-full object-cover blur-md scale-110"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>
//       <div className="container relative z-10 max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mx-4">
//         <div className="loginHeader text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
//           <p className="text-gray-600 mt-2">Please login to your account</p>
//         </div>

//         <div className="image flex justify-center mb-6">
//           <img
//             src="/loginImage.png"
//             alt="Login Image"
//             className="w-32 h-auto rounded-full"
//           />
//         </div>
        
//         <RegisterForm />
//       </div>
//     </div>
//   )
// }


import RegisterForm from './registerForm'

export default function RegisterLayout() {
  return (

    <div className="relative min-h-[100dvh] w-full flex items-center justify-center py-8 px-4 overflow-x-hidden">
      
      <div className="absolute inset-0 -z-10 fixed">
        <img
          src="/images/login2.jpeg"
          alt="Login Background"
          className="w-full h-full object-cover blur-md scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 w-full max-w-[500px] bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden">
        
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
            Register
          </h1>
          <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-[0.2em]">
            Quick Account Setup
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}