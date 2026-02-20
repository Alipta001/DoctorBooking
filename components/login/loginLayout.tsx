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
            src="/loginImage.png"
            alt="Login Image"
            className="w-32 h-auto rounded-full"
          />
        </div>

        <div className="loginForm w-full max-w-sm mx-auto">
          <LoginForm />
          <Link href="/auth/signup">
            <button
              type="button"
              className="w-full py-3.5 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 transition-all duration-300 
                               hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm active:scale-[0.98] cursor-pointer"
            >
              Create an account
            </button>
          </Link>

          <div className="text-center pt-6">
  {/* Container for links with spacing and a divider */}
  <div className="flex items-center justify-center gap-6 sm:gap-8">
    
    {/* Forgot Password */}
    <button
      type="button"
      className="group relative flex flex-col items-center cursor-pointer outline-none"
    >
      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-black">
        Forgot Password
      </span>
      {/* Animated Underline */}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full" />
      {/* Premium Accent Dot */}
      <span className="absolute -bottom-3 w-[3px] h-[3px] bg-amber-600 rounded-full opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0" />
    </button>

    {/* Vertical Minimalist Divider */}
    <div className="h-4 w-[1px] bg-gray-200 rotate-[20deg]" />

    {/* Update Password */}
    <button
      type="button"
      className="group relative flex flex-col items-center cursor-pointer outline-none"
    >
      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-black">
        Update Password
      </span>
      {/* Animated Underline */}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full" />
      {/* Premium Accent Dot */}
      <span className="absolute -bottom-3 w-[3px] h-[3px] bg-amber-600 rounded-full opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0" />
    </button>
    
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
