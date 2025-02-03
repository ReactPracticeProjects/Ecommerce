import React, { useState } from "react";
import logo from "../../assets/lord1.png";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";

function Navbar() {
  const [draweropen, setdraweropen] = useState(false);
  const [navdraweropen, setnavdraweropen] = useState(false);

  const togglenavdrawer = () => {
    setnavdraweropen(!navdraweropen);
  };

  const toggledrawer = () => {
    setdraweropen(!draweropen);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Left logo */}
          <Link to="#" className="flex-shrink-0">
            <img src={logo} className="w-24 h-16 object-contain hover:opacity-90 transition-opacity" alt="Logo" />
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["Men", "Women", "Top Wear", "Bottom Wear"].map((item) => (
              <Link
                key={item}
                to="#"
                className="uppercase tracking-wide text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 text-sm relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"/>
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-6">
            {/* Profile Icon */}
            <Link to="/Profile" className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors duration-200">
              <CiUser className="text-2xl" />
            </Link>

            {/* Shopping Cart */}
            <div className="hidden md:block">
              <button onClick={toggledrawer} className="relative group">
                <CiShoppingCart className="text-2xl text-gray-700 group-hover:text-red-600 transition-colors duration-200" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  4
                </span>
              </button>
            </div>

            {/* Searchbar */}
            <div className="hidden md:block">
              <Searchbar />
            </div>

            {/* Hamburger Menu */}
            <button onClick={togglenavdrawer} className="md:hidden text-gray-700 hover:text-red-600 transition-colors duration-200">
              <GiHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer draweropen={draweropen} toggledrawer={toggledrawer} />

      {/* Mobile Navigation */}
      {navdraweropen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto">
            <div className="flex justify-end p-4">
              <button 
                onClick={togglenavdrawer}
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <IoMdClose className="text-2xl" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg text-center mb-4">
                Menu
              </h2>
              <nav className="flex flex-col space-y-3">
                {["Men", "Women", "Top Wear", "Bottom Wear"].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    onClick={togglenavdrawer}
                    className="py-3 px-4 text-center text-gray-700 bg-gray-50 rounded-lg border border-gray-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;