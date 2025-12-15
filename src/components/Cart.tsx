import React from 'react'
import { XCircle } from "lucide-react";

const Cart = () => {

  return (
    <div className='w-90 left-0'>
      <div className='flex justify-between'>
        <h1>Shopping Cart</h1>
        <XCircle className='hover: text-red-500 transition'/>
      </div>
    </div>
  )
}

export default Cart
