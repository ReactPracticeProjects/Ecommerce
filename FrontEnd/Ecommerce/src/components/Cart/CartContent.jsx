import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

function CartContent() {

    const cardproduct = [{
        productId:1,
        name:"tshirt",
        size:"m",
        color:"red",
        quantity:1,
        price:15,
        img:"https://picsum.photos/200?random=1"
    },
    {
        productId:2,
        name:"jeans",
        size:"m",
        color:"blue",
        quantity:1,
        price:150,
        img:"https://picsum.photos/200?random=2"
    }]

  return (
    <>
    
    {cardproduct.map((product,index)=>{return (
       <div className="cardproductcontainer border justify-around p-2 shadow-md m-2 flex">
        <div className="productimg">
            <img src={product.img} className='w-20 object-cover rounded' alt="" />
        </div>
        
        <div className="productdetails">
            <p>Product Id:{product.productId}</p>
            <p>Product Name:{product.name}</p>
            <p>Product Price:{product.price}</p>
            <div className="flex items-center mt-2">
            <button className='border rounded px-1.5 mr-3  text-xl font-medium'>-</button>
            <span className='mx-2'>{product.quantity}</span>
            <button className='border rounded px-1.5 mr-3  text-xl font-medium'>+</button>

        </div>
        
        </div>
        <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
            <MdDeleteOutline  className='h-6 w-6 mt-2 text-red-500'/>

            </button>
        </div>
      
        

       </div>
    )})}
     
    </>
  )
}

export default CartContent
