import React from 'react'
// import heroimg from '../../assets/rabbit-hero.webp'
import heroimg2 from '../../assets/hero.jpg';
import { Link } from 'react-router-dom'
function Hero() {
  return (
   <>
      <section className='bg-slate-700 text-white relative'>
        <img src={heroimg2} className='w-full h-[250px] md:h-[400px] lg:h-[550px]' alt="" />
        <div className='absolute bg-black bg-opacity-30 inset-0 flex flex-col gap-3 items-center justify-center text-center'>
            <h1 className='uppercase  text-xl md:text-7xl lg:text-9xl font-black'>Vacation <br className='hidden md:block' /> Ready</h1>
            <p className='capitalize  md:text-2xl'>Explore our Vacation ready Outfits with fast worlwide shipping</p>
            <div>
                <Link to="#" className='bg-white text-black p-2 font-medium rounded-sm'>
                    Shop Now
                </Link>
            </div> 
        </div>
      </section>
   </>
  )
}
 
export default Hero
