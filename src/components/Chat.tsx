// import React from 'react'
import { XCircle } from 'lucide-react'
import { useStateContext } from '@/context/contextProvider'
import { chatData } from '@/data/dummy'

const Chat = () => {
    const { handleClick } = useStateContext();
  return (
    <div className='absolute z-50 shadow-xl h-3/4 w-96 p-5 bg-white right-10 top-20'>
      <div className='flex w-full justify-between items-center p-7 pl-5 pb-0'>
        <h1 className='font-semibold text-[20px]'>Shopping Cart</h1>
        <XCircle onClick={() => handleClick("chat")} className='hover:text-red-500 transition text-[20px] right-6'/>
      </div>
      <div className='w-full mt-5 flex flex-col justify-start items-center'>
        {chatData.map((chat, index) => (
            <div key={index}>
                <div className='flex object-cover gap-6 items-center p-5'>
                    <img src={chat.image} className='rounded-4xl w-16 h-16' alt="" />
                    <div className='flex flex-col w-full text-left items-start gap-2'>
                        <h1 className='text-[18px] font-serif'>{chat.message}</h1>
                        <p>{chat.desc}</p>

                        <h1 className='text-[16px] font-serif'>{chat.time}</h1>
                    </div>
                </div>
                <div className="w-full h-px bg-black/10"></div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Chat
