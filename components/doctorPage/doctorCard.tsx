// import { Star, MapPin } from "lucide-react";

// export const DoctorCard = ({ doctor }) => {
//   return (
//     <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
//       <div className="flex items-center gap-5">
//         <div className="w-20 h-20 rounded-2xl bg-gray-200" />

//         <div className="flex-1">
//           <h3 className="text-lg font-bold tracking-tight text-black">
//             {doctor.name}
//           </h3>

//           <p className="text-sm text-gray-500 font-medium">
//             {doctor.specialty}
//           </p>

//           <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
//             <div className="flex items-center gap-1 text-amber-500">
//               <Star size={14} />
//               {doctor.rating}
//             </div>

//             <span>{doctor.experience} yrs experience</span>
//           </div>

//           <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
//             <MapPin size={14} />
//             {doctor.location}
//           </div>
//         </div>

//         <button className="px-5 py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition">
//           Book
//         </button>
//       </div>
//     </div>
//   );
// };


import { Star, MapPin } from "lucide-react";

export const DoctorCard = ({ doctor }) => {
  return (
    <div className="group bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-6">


        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200" />

        <div className="flex-1">

          <h3 className="text-xl font-semibold tracking-tight text-black">
            {doctor.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {doctor.specialty}
          </p>

          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">

            <div className="flex items-center gap-1 text-amber-500 font-medium">
              <Star size={16} />
              {doctor.rating}
            </div>

            <span className="text-gray-400">
              {doctor.experience} years experience
            </span>
          </div>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
            <MapPin size={15} />
            {doctor.location}
          </div>
        </div>

        <button className="px-6 py-3 bg-black text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-lg active:scale-95">
          Book
        </button>
      </div>
    </div>
  );
};