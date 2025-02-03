import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import CartContent from '../Cart/CartContent';

function CartDrawer({draweropen,toggledrawer}) {


    

  return (
    <>

    <div className={`fixed top-0 right-0 w-3/4 bg-white sm:w-1/2 md:w-[30rem] h-full  shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${draweropen ? "translate-x-0":"translate-x-full"}`}>
    
    
    
    
    {/* close Button */}
    <div className="flex justify-end p-4">
        <button onClick={toggledrawer}>
            <IoClose  className='text-xl' />
        </button>
    </div>

    {/* Cart Contenet With Scroable area */}
    <div className="flex-grow p-4 overflow-auto">
      <h2>Your Cart</h2>
      <CartContent/>
    </div>

    {/* CheckOut Button */}
    <div className="p-4 bg-white sticky b-0">
      <button className='bg-zinc-800 text-white p-4 rounded-md w-full hover:bg-white  hover:text-black border border-black '>Checkout</button>
      <p>Shippint Taxes and Discount codes are calculated at CheckOut</p>

    </div>

    

    </div>
    
    
    </>
    
  )
}

export default CartDrawer
