/* "use client"
import React from 'react'

export default function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }
  return (
    <div className="loginForm">
        <form onSubmit={handleSubmit}>
            <div className="email mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder='Email Address' 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <div className="password mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder='Password' 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Login
            </button>
        </form>
    </div>
  )
} */

// "use client"

// export default function LoginForm() {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//   return (
//     <div className="loginForm">
//         <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Input Fields with Glassmorphism */}
//             <div className="space-y-5">
//                 <div className="group relative">
//                     <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 transition-colors group-focus-within:text-blue-500">
//                         EMAIL
//                     </label>
//                     <input 
//                         type="email" 
//                         id="email" 
//                         placeholder='name@company.com' 
//                         className="w-full px-5 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl outline-none transition-all duration-300
//                                    placeholder:text-slate-400 text-slate-900 shadow-inner
//                                    hover:bg-white/20 hover:border-white/40
//                                    focus:bg-white focus:ring-[5px] focus:ring-blue-500/10 focus:border-blue-500"
//                     />
//                 </div>

//                 <div className="group relative">
//                     <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1 transition-colors group-focus-within:text-blue-500">
//                        PASSWORD
//                     </label>
//                     <input 
//                         type="password" 
//                         id="password" 
//                         placeholder='••••••••' 
//                         className="w-full px-5 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl outline-none transition-all duration-300
//                                    placeholder:text-slate-400 text-slate-900
//                                    hover:bg-white/20 hover:border-white/40
//                                    focus:bg-white focus:ring-[5px] focus:ring-blue-500/10 focus:border-blue-500"
//                     />
//                 </div>
//             </div>

//             {/* THE PREMIUM BUTTON */}
//             <div className="relative group">
//                 {/* Outer Glow Background */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-md opacity-25 group-hover:opacity-75 group-hover:blur-lg transition duration-500"></div>
                
//                 <button 
//                     type='submit' 
//                     className="relative w-full h-[58px] bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300 active:scale-95 cursor-pointer"
//                 >
//                     {/* Animated Shimmer Sweep */}
//                     <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
//                     {/* Inner Content */}
//                     <span className="relative flex items-center justify-center gap-3 text-white font-bold tracking-wider text-sm">
//                         LOGIN
//                         <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
//                             <svg className="w-3 h-3 text-white transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                             </svg>
//                         </div>
//                     </span>
                    
//                     {/* Hover Border Highlight */}
//                     <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 rounded-2xl pointer-events-none transition-colors" />
//                 </button>
//             </div>

//             <div className="flex justify-center">
//                 <button type="button" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-all duration-300">
//                     Don't have an account? Sign Up
//                 </button>
//             </div>
//         </form>
//     </div>
//   )
// }



"use client"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useRouter } from 'next/dist/client/components/navigation';
import { useSignInMutation } from '@/customHooks/query/auth.query.hooks';
import { useEffect } from 'react';
import Link from 'next/link';
import LoaderButton from '../layout/loaderButton';


const schema = yup.object().shape({
    email: yup.string().email("Invalid format").required("Required"),
    password: yup.string().min(6, "Min 6 characters").required("Required"),
});

export default function LoginForm() {
    const {mutate, isPending, isSuccess, data} = useSignInMutation();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        const payload = {
            email: data.email,
            password: data.password,
        };
        console.log("Payload sending to API:", payload);
        mutate(payload); 
    }
    useEffect(() => {
        if (isSuccess) {
            if (data?.status === true) {
                router.push("/pages/home");
            }
        }
    }, [isSuccess, data, router]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
                
                <div className="group relative">
                    <input 
                        {...register("email")}
                        type="email" 
                        id="email" 
                        placeholder="Email Address" 
                        className={`w-full px-0 py-3 bg-transparent border-b ${errors.email ? 'border-amber-600/40' : 'border-gray-200'} outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black`}
                    />
                    <div className={`absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-500 group-focus-within:w-full ${errors.email ? 'bg-amber-600' : 'bg-black'}`} />
                    {errors.email && (
                        <span className="absolute -bottom-5 left-0 flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                            <span className="h-[2px] w-2 bg-amber-600 rounded-full" />
                            <p className="text-[12px] font-bold uppercase tracking-widest text-amber-700">{errors.email.message}</p>
                        </span>
                    )}
                </div>

                <div className="group relative">
                    <input 
                        {...register("password")}
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        className={`w-full px-0 py-3 bg-transparent border-b ${errors.password ? 'border-amber-600/40' : 'border-gray-200'} outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800 focus:border-black`}
                    />
                    <div className={`absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-500 group-focus-within:w-full ${errors.password ? 'bg-amber-600' : 'bg-black'}`} />
                    {errors.password && (
                        <span className="absolute -bottom-5 left-0 flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                            <span className="h-[2px] w-2 bg-amber-600 rounded-full" />
                            <p className="text-[12px] font-bold uppercase tracking-widest text-amber-700">{errors.password.message}</p>
                        </span>
                    )}
                </div>
            </div>

            {/* <button 
                type='submit' 
                disabled={isPending}
                className="group relative w-full h-[48px] sm:h-[60px] bg-black text-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl active:scale-[0.98] disabled:opacity-90 disabled:cursor-not-allowed cursor-pointer"
            >
                </button> */}
                <LoaderButton title="Login" loadingText="Logging in..." isPending={isPending} type="submit" />

            <div className="flex items-center gap-4 my-2">
                <div className="h-[1px] w-full bg-gray-100" />
                <span className="text-[14px] text-gray-400 font-bold uppercase tracking-widest">OR</span>
                <div className="h-[1px] w-full bg-gray-100" />
            </div>
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
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <button
                type="button"
                className="group relative flex flex-col items-center cursor-pointer outline-none"
              >
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-black">
                  Forgot Password
                </span>

                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full" />

                <span className="absolute -bottom-3 w-[3px] h-[3px] bg-amber-600 rounded-full opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0" />
              </button>

              <div className="h-4 w-[1px] bg-gray-200 rotate-[20deg]" />

              <button
                type="button"
                className="group relative flex flex-col items-center cursor-pointer outline-none"
              >
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-black">
                  Update Password
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full" />
                <span className="absolute -bottom-3 w-[3px] h-[3px] bg-amber-600 rounded-full opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0" />
              </button>
            </div>
          </div>
        </form>
    );
}