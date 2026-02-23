import DoctorLayout from "@/components/doctorPage/doctorLayout";
import SideBar from "@/components/layout/sidebar";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#000000]">
      <SideBar />
      <main className="flex-1 p-6 lg:p-10">
        <DoctorLayout />
      </main>
    </div>
  );
}