import React from 'react'
import { XCircle } from "lucide-react";
import { cartData } from '@/data/dummy';

const Cart = () => {

  return (
    <div className='absolute h-screen w-96 p-5 right-0 bg-white'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-[20px]'>Shopping Cart</h1>
        <XCircle className='hover: text-red-500 transition text-[20px]'/>
      </div>
      <div className='w-full mt-10 flex flex-col justify-start'>
        {cartData.map((data, index) => (
        <div key={index}>
          <div className='flex object-cover gap-6 items-center p-5'>
            <img src={data.image} className='rounded-lg w-24 h-24' alt="img" />
            <div className='flex flex-col justify-around gap-2'>
              <h1 className='text-[18px] font-serif'>{data.name}</h1>
              <p>{data.category}</p>

              <h1 className='text-[22px] font-serif'>{data.price}</h1>
            </div>
          </div>
          <div className="w-full h-px bg-black"></div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cart
