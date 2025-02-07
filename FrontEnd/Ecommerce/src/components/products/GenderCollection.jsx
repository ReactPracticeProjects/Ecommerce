import React from "react";
import femalecollectionimg from "../../assets/womens-collection.webp";
import malecollectionimg from "../../assets/mens-collection.webp";
import { Link } from "react-router-dom";

function GenderCollection() {
  return (
    <>
      <section className="py-10 px-4 lg:px-3">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Women collection  */}
          <div className="relative">
            <img
              className="object-cover w-[500px] h-[500px]   outline-none border-none rounded-md"
              src={femalecollectionimg}
              alt=""
            />

            <div className="text-black rounded-md bg-white bg-opacity-70 w-fit h-fit whitespace-nowrap left-4 py-2 px-3 absolute inset-96">
              <h1>Women's Collection</h1>
              <Link to="/collections/all?gender=Women" className="underline">
                Shop Now
              </Link>
            </div>
          </div>
          {/* Mens collection */}
          <div className="relative">
            <img
              className="object-cover w-[500px] h-[500px] outline-none border-none rounded-md "
              src={malecollectionimg}
              alt=""
            />
            <div className="text-black rounded-md bg-white bg-opacity-7  0 w-fit h-fit whitespace-nowrap left-4 py-2 px-3 absolute inset-96">
              <h1>Men's Collection</h1>
              <Link to="/collections/all?gender=Men" className="underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GenderCollection;
