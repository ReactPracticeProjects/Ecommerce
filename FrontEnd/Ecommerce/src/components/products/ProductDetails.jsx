import React, { useEffect, useState } from "react";

const selectproduct = {
  name: "Styliesh-Jacket",
  price: 120,
  originalprice: 240,
  description:
    "Elevate your look with this stylish jacket, crafted for comfort and sophistication. Featuring a sleek design, premium fabric, and a perfect fit, it’s your go-to choice for any occasion. Stay warm, stay trendy!",
  brand: "Puma",
  material: "Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["skyblue", "gray"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      alt: "Cotton Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      alt: "Cotton Jacket 2",
    },
  ],
};

function ProductDetails() {

  const [mainimage,setMainimage] = useState("");

  useEffect(()=>{
    if(selectproduct?.images?.length>0){
      setMainimage(selectproduct.images[0].url);
    }
  },[selectproduct])
 

  return (
    <>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-md">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbanail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectproduct.images.map((image, index) => {
              return (
                <img
                  key={index}
                  onClick={()=> setMainimage(image.url)}
                  className="w-20 h-20 object-cover rounded-md cursor-pointer border border-black"
                  src={image.url}
                  alt={image.alt || `Thumbnail ${index}`}
                />
              );
            })}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainimage}
                className="rounded-md object-cover w-full h-auto"
                alt="Main Product"
              />
            </div>
          </div>

          {/* Mobile Theme */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectproduct.images.map((image, index) => {
              return (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded-md cursor-pointer border border-black"
                  src={image.url}
                  alt={image.alt || `Thumbnail ${index}`}
                />
              );
            })}
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectproduct.name}
            </h1>
            <p className="line-through text-gray-400">
              {selectproduct.originalprice && `${selectproduct.originalprice}`}
            </p>
            <p>$ {selectproduct.price}</p>
            <p>{selectproduct.description}</p>

            <p>Colors:</p>
            {selectproduct.colors.map((color, key) => {
              return (
                <button>
                  <div
                    className={`border border-1 w-10 h-10 rounded-full mr-2 border-black`}
                    style={{ backgroundColor: color }}
                  ></div>
                </button>
              );
            })}

            <p>Size:</p>
            {selectproduct.sizes.map((size, index) => {
              return (
                <button
                  key={index}
                  className="px-2 py-1 border border-black mr-2 hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              );
            })}

          

            <div className="mb-6">
                <p className="text-gray-700">Quantity:</p>
                <div className="flex items-center space-x-4 mt-2">

                 <button className="px-2 py-1 bg-gray-200 rounded-md">-</button>

                 <span>1</span>

                 <button className="px-2 py-1 bg-gray-200 rounded-md">+</button>

                </div>

                <button className="w-full bg-black text-white py-1 mt-5 rounded-sm hover:text-black hover:bg-white border border-black  ">
              Add to Cart
            </button>

            <div className="mt-10 text-gray-700">
                <h3 className="font-semibold text-lg md:text-xl">Charactertistics</h3>
                <table className="w-full text-left text-sm text-gray-600">
                    <tbody>
                        <tr>
                            <td className="py-1">Brand</td>
                            <td className="py-1">{selectproduct.brand}</td>
                        </tr>
                        <tr>
                            <td className="py-1">Material</td>
                            <td className="py-1">{selectproduct.material}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
