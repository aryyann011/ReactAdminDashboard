// import React from 'react'
import { Bell, Menu, ShoppingCart, MessageCircle, User } from "lucide-react";
import { useStateContext } from "@/context/contextProvider";

const Navbar = () => {

  const { setActiveMenu, handleClick } = useStateContext()


  return (
    <div className="w-full cursor-pointer flex justify-between p-4 text-[#00B7B5  ] font-semibold">
      <Menu onClick={() => setActiveMenu(prev => !prev)}/>

      <div className="flex justify-around gap-6">
        <ShoppingCart onClick={() => handleClick("cart")}/>
        <MessageCircle onClick={() => handleClick("chat")}/>
        <Bell onClick={() => handleClick("notifications")}/>
        <User onClick={() => handleClick("profile")}/>
      </div>
    </div>
  )
}

export default Navbar
