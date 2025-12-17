import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom" 
import { useStateContext } from "@/context/contextProvider"
import Cart from "@/components/Cart"
import Chat from "@/components/Chat"
import Notifications from "@/components/Notifications"
import Profile from "@/components/Profile"

const AppLayout = () => {

  const { activeMenu, isClicked, handleClick } = useStateContext();
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-black">
      
      <Sidebar/>

      <div className="flex flex-col flex-1 h-screen w-full relative">
        
        <Navbar />
        {isClicked.cart && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => handleClick("cart")}
          />
        )}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat/>}
        {isClicked.notifications && <Notifications/>}
        {isClicked.profile && <Profile/>}
        <main className="h-screen w-full flex-1 overflow-y-auto p-6">
            <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout