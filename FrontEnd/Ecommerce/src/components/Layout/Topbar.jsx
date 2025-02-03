import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { FaMeta } from "react-icons/fa6";

function Topbar() {
  return (
    <>
      <div className="topbar bg-red-bar text-white">
        <div className="container mx-auto flex justify-between items-center px-5 py-2">
          <div className=" hidden md:flex gap-2">
            <FaMeta />
            <IoLogoInstagram />
            <CiTwitter />
          </div>
          <div className="center text-center flex-1">
            <h1>From Our Closet to Yours – Fast, Fashionable Shipping! 🌟🛍️</h1>
          </div>
          <div className="right hidden md:flex">+91 8856077610</div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
