import React from 'react'

function ProductDetails() {

    const selectproduct = {
        name: "Styliesh Jacket",
        price: 120,
        originalprice: 240,
        description:"This is a stylish jacket perfect for any occasion",
        brand:"puma",
        material:"Cotton",
        sized:["S","M","L","XL"],
        colors:["Red","Black"],
        images:[{
            url:"https://picsum.photos/500/500?random=1",
            alt:"Cotton Jacket 1"
        },{
            url:"https://picsum.photos/500/500?random=1",
            alt:"Cotton Jacket 2"
        }]

    }

  return (
    <>
    <div className='max-w-6xl mx-auto bg-white p-8 rounded-md'>
        <div className='flex flex-col md:flex-row'>
            {/* Left Thumbanail */}
            <div className='hidden md:flex flex-col space-y-4 mr-6'>
                {selectproduct.images.map((image,key)=>{
                    return (
            <img src={image.url} alt="" />
                    )
                })}

            </div>
        </div>


    </div>
    
    </>
  )
}

export default ProductDetails
