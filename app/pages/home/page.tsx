import DashboardLayout from '@/components/home/dashbordLayout'
import  SideBar from '@/components/layout/sidebar'

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#000000]">
      <SideBar />
      <main className="flex-1 w-full pt-24 lg:pt-0 overflow-x-hidden"> 
        <div className="p-6 lg:p-10 max-w-[1400px] mx-auto">
          <DashboardLayout />
        </div>
      </main>
    </div>
  )
}