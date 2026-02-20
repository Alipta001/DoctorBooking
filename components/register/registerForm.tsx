// import React from 'react'

// export default function RegisterForm() {
//   return (
//     <div className="registerForm">
//         <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
//         <form className="space-y-4">
//             <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input 
//                     type="text" 
//                     id="name" 
//                     placeholder='First Name' 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>
//              <div className="mb-4">
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input 
//                     type="text" 
//                     id="lastName" 
//                     placeholder='Last Name' 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input 
//                     type="email" 
//                     id="email" 
//                     placeholder='Email Address' 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input 
//                     type="password" 
//                     id="password" 
//                     placeholder='Password' 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                 <input 
//                     type="password" 
//                     id="confirmPassword" 
//                     placeholder='Confirm Password' 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input 
//                     type="text" 
//                     id="address" 
//                     placeholder='Address' 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>
//             <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
//                 Register
//             </button>
//         </form>
//     </div>

//   )
// }


    "use client"
import { useSignUpMutation } from '@/customHooks/query/auth.query.hooks';
import Link from 'next/link';

export default function RegisterForm() {
    const { mutate, isSuccess, isError, error } = useSignUpMutation()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
           const payload = {
  first_name: formData.get("firstName"),
  last_name: formData.get("lastName"),
  email: formData.get("email"),
  password: formData.get("password"),
  confirm_password: formData.get("confirmPassword"),
  address: formData.get("address"),
 /*  role: formData.get("role") */
}
        mutate(payload)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-10">
                <div className="group relative">
                    <input 
                        name="firstName"
                        type="text" 
                        required
                        placeholder="First Name" 
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
                    />
                    <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
                </div>
                <div className="group relative">
                    <input 
                        name="lastName"
                        type="text" 
                        required
                        placeholder="Last Name" 
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
                    />
                    <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
                </div>
            </div>

            {/* Email */}
            <div className="group relative">
                <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="Email Address" 
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
                />
                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-10">
                <div className="group relative">
                    <input 
                        name="password"
                        type="password" 
                        required
                        placeholder="Password" 
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
                    />
                    <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
                </div>
                <div className="group relative">
                    <input 
                        name="confirmPassword"
                        type="password" 
                        required
                        placeholder="Confirm Password" 
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
                    />
                    <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
                </div>
            </div>

            {/* Address */}
            <div className="group relative">
                <input 
                    name="address"
                    type="text" 
                    placeholder="Physical Address" 
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
                />
                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
            </div>

            {/* Premium Role Dropdown */}
            <div className="group relative">
                <select 
                    name="role"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 text-gray-800 focus:border-black cursor-pointer appearance-none"
                >
                    <option value="" disabled selected>Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                </select>
                
                {/* Custom Arrow Icon */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
            </div>

            {/* Register Button */}
            <div className="pt-6">
                <button 
                    type='submit' 
                    className="group relative w-full h-[58px] bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-[0.97] cursor-pointer"
                >
                    <span className="relative z-10 font-bold tracking-[0.1em] text-xs uppercase">
                        Register
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
            </div>

            {/* Footer */}
            <div className="text-center pt-4">
                <span className="text-[12px] text-gray-400 uppercase tracking-widest mr-2">Already have an account?</span>
                <div className="inline-block group relative cursor-pointer">
                    <Link href="/auth/signin">
                        <span className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-900">
                            Sign In
                        </span>
                    </Link>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                </div>
            </div>
        </form>
    )
}