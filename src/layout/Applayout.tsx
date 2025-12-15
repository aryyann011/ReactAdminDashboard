import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom" 
import { useStateContext } from "@/context/contextProvider"

const AppLayout = () => {

  const {activeMenu} = useStateContext();
  return (
    // 1. 'overflow-hidden' stops the whole window from scrolling
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-black">
      
      {/* Sidebar: Fixed width */}
      <Sidebar/>

      {/* 2. Main Area: 'flex-1' forces it to fill ALL remaining space */}
      {/* REMOVED 'p-5' here. That was your bug. */}
      <div className="flex flex-col flex-1 h-screen w-full relative">
        
        {/* Navbar: Sits at the very top */}
        <Navbar />
        
        {/* 3. Content Area: This is the ONLY thing that scrolls */}
        <main className="h-screen w-full flex-1 overflow-y-auto p-6">
            <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout