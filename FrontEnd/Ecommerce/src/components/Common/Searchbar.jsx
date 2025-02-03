import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Searchbar() {

    const [searchterm,setsearchterm] = useState("");
    const [isOpen,setisOpen] = useState(false);

    const handlesearchtoggle = ()=>{
        setisOpen(!isOpen)

    }

    const handlesearch = (e)=>{
        e.preventDefault();
        console.log("Search term : " + searchterm);
        setsearchterm("");
        setisOpen(false);
    }

    

  return (
   <>
  <div className={`flex items-center justify-center w-full  transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50": "w-auto"}`}>
   {isOpen? (<form  onSubmit={handlesearch} className='releative flex justify-center items-center w-full'>
       <div className="relative w-1/2">
       <input type="text" name="" placeholder='Search' onChange={(e)=>setsearchterm(e.target.value)} value={searchterm} className='bg-zinc-300 p-2 rounded-md w-full focus:outline-none placeholder:text-red-bar' id="" />

       <button type='submit' className='absolute right-2 top-1/4 transform -transalate-y-1/2'>
       <CiSearch  className='text-xl' />
       </button>
       
       </div>
       {/* close button */}
       <button type='button' onClick={handlesearchtoggle} className='absolute right-4 top-1/2 transform -translate-y-1/2'>
       <IoClose  className='text-xl' />
       </button>

   </form>):(
    <button onClick={handlesearchtoggle}>
        <CiSearch  className='text-xl' />
    </button>
   )}
  
  </div>
   </>
  )
}

export default Searchbar
