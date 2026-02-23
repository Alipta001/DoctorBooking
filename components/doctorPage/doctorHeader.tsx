// "use client";
// import { Search } from "lucide-react";

// type Props = {
//   search: string;
//   setSearch: (value: string) => void;
//   sort: string;
//   setSort: (value: string) => void;
// };

// export const DoctorHeader = ({
//   search,
//   setSearch,
//   sort,
//   setSort,
// }: Props) => {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-8">
      
//       {/* Search Bar */}
//       <div className="relative w-full md:max-w-md">
//         <Search
//           size={18}
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Search doctors..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
//         />
//       </div>

//       {/* Sort Dropdown */}
//       <select
//         value={sort}
//         onChange={(e) => setSort(e.target.value)}
//         className="px-5 py-4 bg-white border border-gray-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
//       >
//         <option value="rating">Sort by Rating</option>
//         <option value="experience">Sort by Experience</option>
//         <option value="name">Sort by Name</option>
//       </select>
//     </div>
//   );
// };


"use client";
import { Search } from "lucide-react";

export const DoctorHeader = ({ search, setSearch, sort, setSort }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center text-[#ffa2a2]">
        Find the Right Specialist
      </h1>

      <div className="relative w-full max-w-2xl">
        <Search
          size={20}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search by doctor name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-6 py-5 text-base bg-white border border-gray-200 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:shadow-xl transition-all duration-300"
        />
      </div>

      <div className="mt-6">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="rating">Sort by Rating</option>
          <option value="experience">Sort by Experience</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
    </div>
  );
};