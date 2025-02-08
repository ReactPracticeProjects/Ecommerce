import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

function NewArrivals() {
  const clothingProducts = [
    { name: "T-Shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Hoodie", price: 35 },
    { name: "Jacket", price: 80 },
    { name: "Sneakers", price: 90 },
    { name: "Sweater", price: 45 },
    { name: "Shorts", price: 25 },
    { name: "Dress", price: 60 },
    { name: "Skirt", price: 40 },
    { name: "Blazer", price: 100 },
    { name: "Socks (Pack of 3)", price: 15 },
    { name: "Cap", price: 18 },
  ];

  const scrollref = useRef(null);
  const [isDragging,setisDragging] = useState(false);   
  const [startX,setStartX] = useState(0);
  const [scrollLeft,setScrollLeft] = useState(false);
  const [canscrollleft,setcanScrollLeft] = useState(false);
  const[canscrollRight,setcanscrollRight] = useState(true);

const scroll = (direction) =>{
    const scrollamount = direction === 'left' ? -300:300;
    scrollref.current.scrollBy({left: scrollamount , behaviour:"smooth "});
}

//   update scroll btn
const updateScrollbtns = ()=>{
    const container = scrollref.current;

    if(container){
        const leftscroll = container.scrollLeft;
        const rightscrollable = container.scrollWidth> leftscroll + container.clientWidth;
        setcanScrollLeft(leftscroll > 0);
        setcanscrollRight(rightscrollable);
    }

    console.log({
        scrollLeft:container.scrollLeft,
        clientWidth:container.clientWidth,
        containerScrollWidth:container.scrollWidth,
    })
}

useEffect(()=>{
    const container = scrollref.current;
    if(container){
         container.addEventListener("scroll",updateScrollbtns);
         updateScrollbtns();
    }
    
},[])
 

  return (
    <>
      <section className="p-5 relative  ">
        {/* Title and Description */}
        <div className="text-center mb-110">
          <h1 className="font-semibold text-2xl mb-4">Explore New Arrivals</h1>
          <p className=" text-md md:text-lg mb-2">
            Discover the latest styles{" "}
            <span className="hidden md:inline-block">
              and straight off the runway,freshly added to keep you wardrob on
              the cutting edge of fashion{" "}
            </span>
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="text-3xl flex justify-end  md:gap-1">
          <button onClick={()=>scroll("left")} disabled={!canscrollleft} type="button" className={`${canscrollleft ? "text-black" :"text-zinc-300"}`}>
            <IoIosArrowDropleft />
          </button>
          <button onClick={()=>scroll("right")} type="button" className={`${canscrollRight ? "text-black" :"text-zinc-300 cursor-not-allowed" }`}>
            <IoIosArrowDropright />
          </button>
        </div>

        {/* Scrollable images */}
        <div>
          <div ref={scrollref} className="flex overflow-x-auto gap-5 py-5 px-2 no-scrollbar scroll-smooth whitespace-nowrap">
            {clothingProducts.map((item, key) => {
              return (
                <>
                  <div key={key} className="relative flex-none w-[300px]">
                    <img
                      src="https://picsum.photos/300/300"
                      className="rounded-md w-full"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 px-5 py-2 backdrop-blur-sm text-white font-medium bg-black/10 w-full">
                     
                     <Link to={`/product/${key}`}>
                     <p>{item.name}</p>
                      <p>$ {item.price}</p>
                     </Link>
                      
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
