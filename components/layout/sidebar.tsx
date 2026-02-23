// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   LayoutDashboard, UserRound, Calendar, ClipboardList, 
//   MessageSquare, Settings, LogOut, PlusCircle, Menu, X, Search 
// } from "lucide-react";

// const navLinks = [
//   { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
//   { icon: UserRound, label: "Doctors", path: "/dashboard/doctors" },
//   { icon: Calendar, label: "Schedule", path: "/dashboard/appointments" },
//   { icon: MessageSquare, label: "Messages", path: "/dashboard/messages" },
//   { icon: ClipboardList, label: "Records", path: "/dashboard/records" },
// ];

// export const Sidebar = () => {
//   const pathname = usePathname();
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const SidebarContent = () => (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center gap-3 mb-12 px-2">
//         <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
//           <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
//         </div>
//         <span className="text-xl font-black tracking-tighter uppercase text-black">Doc<span className="text-gray-400">Reserve</span></span>
//       </div>

//       <nav className="space-y-2 flex-1">
//         <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 ml-2">Main Menu</p>
//         {navLinks.map((link) => {
//           const isActive = pathname === link.path;
//           return (
//             <Link key={link.path} href={link.path} onClick={() => setIsMobileOpen(false)} className="relative block">
//               <motion.div whileHover={{ x: 5 }} className={`flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${isActive ? "bg-black text-white shadow-xl shadow-black/20" : "text-gray-500 hover:bg-gray-50 hover:text-black"}`}>
//                 <link.icon size={20} className={`${isActive ? "text-white" : "group-hover:scale-110 transition-transform duration-300"}`} />
//                 <span className="text-xs font-bold uppercase tracking-widest">{link.label}</span>
//                 {isActive && <motion.div layoutId="activeGlow" className="absolute -left-2 w-1 h-8 bg-black rounded-full" />}
//               </motion.div>
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="mt-8 mb-8 p-6 bg-[#F8F9FA] rounded-[2rem] border border-gray-100 relative overflow-hidden group">
//         <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Need a checkup?</p>
//         <button className="flex items-center gap-2 text-xs font-bold text-black hover:gap-3 transition-all">Quick Booking <PlusCircle size={14} /></button>
//         <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
//       </div>

//       <div className="pt-6 border-t border-gray-50 space-y-2">
//         <Link href="/dashboard/settings" className="flex items-center space-x-4 px-6 py-3 rounded-2xl text-gray-500 hover:text-black transition-colors group">
//           <Settings size={18} className="group-hover:rotate-45 transition-transform duration-500" />
//           <span className="text-xs font-bold uppercase tracking-widest">Settings</span>
//         </Link>
//         <button className="w-full flex items-center space-x-4 px-6 py-3 rounded-2xl text-amber-600 hover:bg-amber-50 transition-all group">
//           <LogOut size={18} /><span className="text-xs font-bold uppercase tracking-widest">Logout</span>
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-[45] px-6 flex items-center justify-between">
//         <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-black text-white rounded-xl shadow-lg"><Menu size={20} /></button>
//         <span className="font-black text-black tracking-tighter text-sm uppercase">DocR</span>
//         <Search size={18} className="text-gray-400" />
//       </div>

//       <aside className="hidden lg:flex flex-col w-80 bg-white border-r border-gray-100 p-8 h-screen sticky top-0 overflow-y-auto no-scrollbar">
//         <SidebarContent />
//       </aside>

//       <AnimatePresence>
//         {isMobileOpen && (
//           <>
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[50] lg:hidden" />
//             <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[60] lg:hidden p-8 shadow-2xl overflow-y-auto">
//               <button onClick={() => setIsMobileOpen(false)} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full text-black"><X size={20} /></button>
//               <SidebarContent />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };



"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserRound,
  Calendar,
  ClipboardList,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
} from "lucide-react";

const navLinks = [
  { icon: LayoutDashboard, label: "Overview", path: "/pages/home" },
  { icon: UserRound, label: "Doctors", path: "/pages/doctorPage" },
  { icon: Calendar, label: "Schedule", path: "/dashboard/appointments" },
  { icon: MessageSquare, label: "Messages", path: "/dashboard/messages" },
  { icon: ClipboardList, label: "Records", path: "/dashboard/records" },
];

export default function SideBar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const NavItem = ({ link }: any) => {
    const isActive = pathname === link.path;
    const Icon = link.icon;

    return (
      <Link
        href={link.path}
        onClick={() => setIsMobileOpen(false)}
        className="block"
      >
        <div
          className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 hover:translate-x-1 ${
            isActive
              ? "bg-black text-white shadow-xl"
              : "text-gray-500 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <Icon size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">
            {link.label}
          </span>
        </div>
      </Link>
    );
  };

  const Content = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <span className="text-xl font-black tracking-tight uppercase">
          Doc<span className="text-gray-400">Reserve</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {navLinks.map((link) => (
          <NavItem key={link.path} link={link} />
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="pt-6 border-t space-y-2">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-4 px-6 py-3 rounded-2xl text-gray-500 hover:text-black hover:bg-gray-50 transition"
        >
          <Settings size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">
            Settings
          </span>
        </Link>

        <button className="w-full flex items-center gap-4 px-6 py-3 rounded-2xl text-amber-600 hover:bg-amber-50 transition">
          <LogOut size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">
            Logout
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-white border-b z-40 px-6 flex items-center justify-between">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 bg-black text-white rounded-xl"
        >
          <Menu size={20} />
        </button>
        <span className="font-black text-sm uppercase">DocR</span>
        <Search size={18} className="text-gray-400" />
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-80 bg-white border-r p-8 h-screen sticky top-0 overflow-y-auto">
        <Content />
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsMobileOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white p-8 shadow-2xl transition-transform duration-300 ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full"
          >
            <X size={20} />
          </button>

          <Content />
        </div>
      </div>
    </>
  );
};