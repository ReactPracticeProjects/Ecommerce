import React from 'react'
import { Link } from 'react-router-dom'
import { FaMeta,FaInstagram,FaSquareTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Copyright from './Copyright';

const Footer = () => {


    const items= ["Men's Top Wear","Women Top Wear","Men's Bottom Wear","Women's Bottom Wear"]
    const supportlinks= ["Contact Us","About Us","FAQ's","Features"]

  return (
   <>
   <footer className='border-t bg-zinc-100 md:px-12 py-10 md:py-12'>
    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 px-10 lg:px-0'>
        <div className='flex flex-col gap-2 border-b-2 border-zinc-300 pb-2 md:border-0'>
            <h3 className='font-semibold text-lg mb-[15px] md:mb-5'>Newsletter</h3>
            <p className='text-[17px]'>Be the First to hear about new products,exclusive events,and online offers</p>
            
            <div>
                <form action="">
                    <input type="email" name="" placeholder='Enter Your Email' className='p-2 border border-zinc-400 rounded-md focus:outline-none' id="" />
                    <button type='submit' className='bg-black text-white p-2 rounded-md'>
                        <span>Subscribe</span>

                    </button>
                </form>
            </div>
            <h3>Sign up and get 10% off on your first order</h3>
        </div>


{/* Shop Links */}
        <div className='border-b-2 border-zinc-300 pb-2 md:border-0'>
            <h3 className='font-semibold text-lg mb-[15px] md:mb-5'>Shop</h3>
            <div className="items flex flex-col gap-2">
                {items.map((item,key)=>{
                    return (
                        <Link className='text-[17px] hover:text-gray-600' to="#">{item}</Link>
                    )
                })}

            </div>



        </div>

{/* Contact Us and FAQ's */}
        <div className='border-b-2 border-zinc-300 pb-2 md:border-0'>
            <h3 className='font-semibold text-lg mb-[15px] md:mb-5'>Support</h3>
            <div className="items flex flex-col gap-2">
                {supportlinks.map((item,key)=>{
                    return (
                        <Link className='text-[17px] hover:text-gray-600' to="#">{item}</Link>
                    )
                })}

            </div>

        </div>
{/* Social Meida and Contact Number */}
        <div className='flex flex-col gap-3 border-b-2 border-zinc-300 pb-2 md:border-0'>
            <h3 className='font-semibold text-lg mb-[15px] md:mb-4'>Follow Us</h3>
            <div className="icons flex gap-2 text-xl">
            <FaMeta />
            <FaInstagram />
            <FaSquareTwitter />
            </div>
            <h2 className='font-bold'>Call Us</h2>
            <span className='text-xl flex gap-3 items-center'><IoCallOutline />  <span>91 9876543210</span></span>
          
        </div>

    </div>
    
    
   </footer>
   <Copyright/>
   
   </>
  )
}

export default Footer
