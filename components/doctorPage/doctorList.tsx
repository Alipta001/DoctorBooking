import { DoctorCard } from "./doctorCard";



export const DoctorList = ({ doctors }) => {
  if (doctors.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400 font-medium">
        No doctors found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};