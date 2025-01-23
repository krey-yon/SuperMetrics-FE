import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <div className="flex justify-between items-center text-gray-600 p-2 border-b border-gray-200">
      <div className="text-black text-xl font-bold px-8">SuperMetrics.com</div>
      <div>
        <ul className="hidden md:flex list-none m-2 gap-8 text-lg"> 
          <li className="flex">Features <IoIosArrowDown className="translate-y-1.5"/> </li>
          <li className="flex" >Resources <IoIosArrowDown className="translate-y-1.5"/> </li>
          <li className="flex">Company <IoIosArrowDown className="translate-y-1.5" /> </li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="hidden md:flex gap-4 px-8">
        <button className="border-none text-lg">Log in</button> 
        <button className="bg-blue-500 text-white text-lg p-2 rounded-md">Sign up</button>
      </div>
      <MobileNavbar/>
    </div>
  );
}

export default Navbar;
