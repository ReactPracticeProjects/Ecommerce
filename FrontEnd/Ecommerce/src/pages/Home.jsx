import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/products/GenderCollection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'

function Home() {
  return (
    <>
    <Hero/>
    <GenderCollection/>
    <NewArrivals/>

    {/* Best Seller */}

    <h2 className='font-bold mb-4 text-center text-3xl'>Best Seller</h2>
    <ProductDetails/>
    </>
  )
}

export default Home
