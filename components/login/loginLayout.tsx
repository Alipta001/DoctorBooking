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


import LoginForm from "./loginForm";

export default function LoginLayout() {
  return (
    <div className="loginLayout relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-0">
      <div className="backgroundImg absolute inset-0 -z-10">
        <img
          src="/images/login2.jpeg"
          alt="Login Background"
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="container relative z-10 w-full max-w-md sm:max-w-md bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl">
        <div className="loginHeader text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Please login to your account</p>
        </div>

        <div className="image flex justify-center mb-4 sm:mb-6">
          <img
            src="/images/profile-icon.png"
            alt="Login Image"
            className="w-24 h-24 sm:w-32 sm:h-auto rounded-full"
          />
        </div>

        <div className="loginForm w-full max-w-sm mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}