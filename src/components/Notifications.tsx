// import React from 'react'
import { XCircle } from "lucide-react"
import { useStateContext } from "@/context/contextProvider"
import { notifications } from "@/data/dummy"
import { Button } from "./ui/button"

const Notifications = () => {
    const { handleClick } = useStateContext()

  return (
    <div className='absolute z-50 shadow-xl h-3/4 w-110 p-5 bg-white right-8 top-20 object-contain'>
      <div className='flex w-full justify-between items-center pt-4 pr-7 pl-5 pb-0'>
        <h1 className='font-semibold text-[20px]'>Notifications</h1>
        <XCircle onClick={() => handleClick("notifications")} className='hover:text-red-500 transition text-[20px] right-6'/>
      </div>
      <div className='w-full mt-2 flex flex-col justify-start'>
        {notifications.map((noti, index) => (
            <div key={index}>
              <div className='flex object-cover gap-4 items-center p-4'>
                  <img src={noti.image} className='rounded-4xl w-16 h-16' alt="" />
                  <div className='flex flex-col w-full text-left'>
                      <h1 className='text-[18px] font-serif'>{noti.title}</h1>
                      <p>{noti.message}</p>
                  </div>
              </div>
              <div className="w-full h-px bg-black/10"></div>
            </div>
        ))}
      </div>
      <Button 
        className="w-full h-8 bg-[#03C9D7] hover:bg-[#05b2b0] text-white rounded-lg py-6 mb-4 mt-3"
      >
        See All Messages
      </Button>
    </div>
  )
}

export default Notifications
