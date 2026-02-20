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


//     "use client"
// import { useSignUpMutation } from '@/customHooks/query/auth.query.hooks';
// import { yupResolver } from "@hookform/resolvers/yup"
// import Link from 'next/link';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// const schema = yup.object().shape({
//   firstName: yup.string().required("First name is required"),
//   lastName: yup.string().required("Last name is required"),
//   email: yup.string().email("Invalid email address").required("Email is required"),
//   password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//   confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
//   address: yup.string().required("Address is required")
// });
// export default function RegisterForm() {
//     const { mutate, isSuccess, isError, error } = useSignUpMutation()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors},
//     } = useForm({resolver: yupResolver(schema)})
//     const handleClick = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target)
//            const payload = {
//   first_name: formData.get("firstName"),
//   last_name: formData.get("lastName"),
//   email: formData.get("email"),
//   password: formData.get("password"),
//   confirm_password: formData.get("confirmPassword"),
//   address: formData.get("address"),
//  /*  role: formData.get("role") */
// }
//         mutate(payload)
//     }

//     return (
//         <form onSubmit={handleSubmit(handleClick)} className="space-y-8">
//             {/* Name Row */}
//             <div className="grid grid-cols-2 gap-10">
//                 <div className="group relative">
//                     <input 
//                         name="firstName"
//                         type="text" 
//                         required
//                         placeholder="First Name" 
//                         className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
//                     />
//                     <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//                 </div>
//                 <div className="group relative">
//                     <input 
//                         name="lastName"
//                         type="text" 
//                         required
//                         placeholder="Last Name" 
//                         className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
//                     />
//                     <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//                 </div>
//             </div>

//             {/* Email */}
//             <div className="group relative">
//                 <input 
//                     name="email"
//                     type="email" 
//                     required
//                     placeholder="Email Address" 
//                     className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
//                 />
//                 <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//             </div>

//             {/* Passwords */}
//             <div className="grid grid-cols-2 gap-10">
//                 <div className="group relative">
//                     <input 
//                         name="password"
//                         type="password" 
//                         required
//                         placeholder="Password" 
//                         className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
//                     />
//                     <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//                 </div>
//                 <div className="group relative">
//                     <input 
//                         name="confirmPassword"
//                         type="password" 
//                         required
//                         placeholder="Confirm Password" 
//                         className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
//                     />
//                     <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//                 </div>
//             </div>

//             {/* Address */}
//             <div className="group relative">
//                 <input 
//                     name="address"
//                     type="text" 
//                     placeholder="Physical Address" 
//                     className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black cursor-text"
//                 />
//                 <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//             </div>

//             {/* Premium Role Dropdown */}
//             <div className="group relative">
//                 <select 
//                     name="role"
//                     required
//                     className="w-full px-0 py-3 bg-transparent border-b border-gray-200 outline-none transition-all duration-300 text-gray-800 focus:border-black cursor-pointer appearance-none"
//                 >
//                     <option value="" disabled selected>Select Role</option>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                     <option value="moderator">Moderator</option>
//                 </select>
                
//                 {/* Custom Arrow Icon */}
//                 <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
//                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </div>

//                 <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-500 group-focus-within:w-full pointer-events-none" />
//             </div>

//             {/* Register Button */}
//             <div className="pt-6">
//                 <button 
//                     type='submit' 
//                     className="group relative w-full h-[58px] bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-[0.97] cursor-pointer"
//                 >
//                     <span className="relative z-10 font-bold tracking-[0.1em] text-xs uppercase">
//                         Register
//                     </span>
//                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//                 </button>
//             </div>

//             {/* Footer */}
//             <div className="text-center pt-4">
//                 <span className="text-[12px] text-gray-400 uppercase tracking-widest mr-2">Already have an account?</span>
//                 <div className="inline-block group relative cursor-pointer">
//                     <Link href="/auth/signin">
//                         <span className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-900">
//                             Sign In
//                         </span>
//                     </Link>
//                     <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
//                 </div>
//             </div>
//         </form>
//     )
// }



"use client"
import { useSignUpMutation } from '@/customHooks/query/auth.query.hooks';
import { yupResolver } from "@hookform/resolvers/yup"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .min(2, "Name too short")
        .required("First name is required"),
    lastName: yup
        .string()
        .trim()
        .min(2, "Name too short")
        .required("Last name is required"),
    email: yup
        .string()
        .trim()
        .lowercase()
        .email("Please enter a valid email address")
        .required("Email address is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Requires at least one uppercase letter")
        .matches(/[a-z]/, "Requires at least one lowercase letter")
        .matches(/[0-9]/, "Requires at least one number")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Please confirm your password"),
    address: yup
        .string()
        .trim()
        .min(5, "Please provide a complete address")
        .required("Physical address is required"),
    role: yup
        .string()
        .oneOf(["user", "admin"], "Please select a valid role")
        .required("Account role selection is required")
});

export default function RegisterForm() {
    const { mutate, isPending } = useSignUpMutation();
    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors } } = useForm({ 
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        mutate({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            confirm_password: data.confirmPassword,
            address: data.address,
            /* role: data.role  */
        }, {
      
onSuccess: (res) => {
    // Using ?. makes sure it doesn't crash even if res is weirdly empty
    if (res?.status === true || res?.status === 'true') {
        toast.success(res?.message || "Success!");
        router.push("/auth/otp");
    }
            },
            onError: (err) => {
                // The hook handles the error toast, but you can add local logic here if needed
                console.error("Registration failed:", err);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-10 w-full">
            
            {/* Names Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-10">
                <div className="group relative">
                    <input 
                        {...register("firstName")}
                        type="text" 
                        placeholder="First Name" 
                        className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.firstName ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all placeholder:text-gray-400 focus:border-black`}
                    />
                    {errors.firstName && (
                        <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute">{errors.firstName.message}</p>
                    )}
                </div>
                
                <div className="group relative">
                    <input 
                        {...register("lastName")}
                        type="text" 
                        placeholder="Last Name" 
                        className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.lastName ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all placeholder:text-gray-400 focus:border-black`}
                    />
                    {errors.lastName && (
                        <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute">{errors.lastName.message}</p>
                    )}
                </div>
            </div>

            {/* Email */}
            <div className="group relative">
                <input 
                    {...register("email")}
                    type="email" 
                    placeholder="Email Address" 
                    className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.email ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all placeholder:text-gray-400 focus:border-black`}
                />
                {errors.email && (
                    <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute">{errors.email.message}</p>
                )}
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-10">
                <div className="group relative">
                    <input 
                        {...register("password")}
                        type="password" 
                        placeholder="Password" 
                        className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.password ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all placeholder:text-gray-400 focus:border-black`}
                    />
                    {errors.password && (
                        <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute leading-tight">{errors.password.message}</p>
                    )}
                </div>
                
                <div className="group relative">
                    <input 
                        {...register("confirmPassword")}
                        type="password" 
                        placeholder="Confirm" 
                        className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.confirmPassword ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all placeholder:text-gray-400 focus:border-black`}
                    />
                    {errors.confirmPassword && (
                        <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute">{errors.confirmPassword.message}</p>
                    )}
                </div>
            </div>

            {/* Address */}
            <div className="group relative">
                <input 
                    {...register("address")}
                    type="text" 
                    placeholder="Address" 
                    className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.address ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all placeholder:text-gray-400 focus:border-black`}
                />
                {errors.address && (
                    <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute">{errors.address.message}</p>
                )}
            </div>

            {/* Role */}
            <div className="group relative">
                <select 
                    {...register("role")}
                    className={`w-full px-0 py-1.5 sm:py-2 bg-transparent border-b ${errors.role ? 'border-amber-600/40' : 'border-gray-200'} outline-none text-sm transition-all appearance-none cursor-pointer`}
                    defaultValue=""
                >
                    <option value="" disabled>Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                {errors.role && (
                    <p className="text-[11px] font-bold uppercase text-amber-700 mt-1 absolute">{errors.role.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button 
                    type='submit' 
                    disabled={isPending}
                    className="group relative w-full h-[48px] sm:h-[60px] bg-black text-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span className="relative z-10 font-bold tracking-[0.2em] text-[14px] uppercase">
                        {isPending ? "Creating Account..." : "Sign Up"}
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
            </div>

            {/* Link to Login */}
            <div className="text-center">
                <Link href="/auth/signin" className="group relative inline-block">
                    <span className="text-[12px] font-black uppercase tracking-[0.1em] text-gray-400 group-hover:text-black transition-colors">Sign In Instead</span>
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
            </div>
        </form>
    )
}