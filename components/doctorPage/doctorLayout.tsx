// "use client";
// import { useState, useMemo } from "react";
// import { DoctorHeader } from "./doctorHeader";
// import { DoctorList } from "./doctorList";
// const mockDoctors = [
//   {
//     id: 1,
//     name: "Dr. Julianne Moore",
//     specialty: "Dermatologist",
//     rating: 4.8,
//     experience: 10,
//     location: "New York",
//   },
//   {
//     id: 2,
//     name: "Dr. Robert Chen",
//     specialty: "Cardiologist",
//     rating: 4.9,
//     experience: 14,
//     location: "Los Angeles",
//   },
//   {
//     id: 3,
//     name: "Dr. Emily Carter",
//     specialty: "Neurologist",
//     rating: 4.6,
//     experience: 8,
//     location: "Chicago",
//   },
// ];

// export default function DoctorLayout() {
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("rating");

//   const filteredDoctors = useMemo(() => {
//     let result = mockDoctors.filter((doctor) =>
//       doctor.name.toLowerCase().includes(search.toLowerCase()) ||
//       doctor.specialty.toLowerCase().includes(search.toLowerCase())
//     );

//     if (sort === "rating") {
//       result.sort((a, b) => b.rating - a.rating);
//     } else if (sort === "experience") {
//       result.sort((a, b) => b.experience - a.experience);
//     } else if (sort === "name") {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     }

//     return result;
//   }, [search, sort]);

//   return (
//     <div className="space-y-6">
//       <DoctorHeader
//         search={search}
//         setSearch={setSearch}
//         sort={sort}
//         setSort={setSort}
//       />

//       <DoctorList doctors={filteredDoctors} />
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { DoctorHeader } from "./doctorHeader";
import { DoctorList } from "./doctorList";

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Julianne Moore",
    specialty: "Dermatologist",
    rating: 4.8,
    experience: 10,
    location: "New York",
  },
  {
    id: 2,
    name: "Dr. Robert Chen",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: 14,
    location: "Los Angeles",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialty: "Neurologist",
    rating: 4.6,
    experience: 8,
    location: "Chicago",
  },
];

export default function DoctorLayout() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("rating");

  const filteredDoctors = mockDoctors
    .filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "experience") return b.experience - a.experience;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto">
      <DoctorHeader
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      <div className="px-4 pb-20">
        <DoctorList doctors={filteredDoctors} />
      </div>
    </div>
  );
}