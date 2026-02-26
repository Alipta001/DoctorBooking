/* import LoginForm from './loginForm'
export default function LoginLayout() {
  return (
    <div className='loginLayout'>
        <div className="backgroundImg">
            <img src="/images/login.webp" alt="Login Background" />
        </div>
        <div className="container">
            <div className="loginHeader">
                <h1>Welcome Back!</h1>
                <p>Please login to your account</p>
            </div>
            <div className="image">
                <img src="/loginImage.png" alt="Login Image" />
            </div>
            <div className="form">
                <LoginForm />
            </div>        
        </div>
    </div>
  )
}*/

import Link from "next/dist/client/link";
import LoginForm from "./loginForm";

export default function LoginLayout() {
  return (
    <div className="loginLayout relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="backgroundImg absolute inset-0 -z-10">
        <img
          src="/images/login2.jpeg"
          alt="Login Background"
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="container relative z-10 max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mx-4">
        <div className="loginHeader text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-600 mt-2">Please login to your account</p>
        </div>

        <div className="image flex justify-center mb-6">
          <img
            src="/images/profile-icon.png"
            alt="Login Image"
            className="w-32 h-auto rounded-full"
          />
        </div>

        <div className="loginForm w-full max-w-sm mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
