import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

function Header() {
  return (
 <>
 
 <header className='border-b-2 border-zinc-300'>
 <Topbar/>

 <Navbar/>
 </header>
 {/* cart drawer */}

 
 </>
  )
}

export default Header
