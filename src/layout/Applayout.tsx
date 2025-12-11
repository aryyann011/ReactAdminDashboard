// import React from 'react'
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom" 

const Applayout = () => {
  return (
    <div  className="h-screen w-screen flex">
      <Sidebar/>
      <div className="flex flex-col p-5">
        <Navbar/>
        <main className="p-6">
            <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Applayout
