import React from "react";
import logo from "../../assets/Logo/image.png";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
    <div className="container flex justify-between flex-col sm:flex-row mt-3 w-full ">
     <div className="flex justify-between items-center">
           
            <div className="flex  items-center space-x-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" alt="Canada Flag" className="w-12 sm:w-20" />
                <span className="text-gray-800 sm:text-xl text-lg font-medium">Government of Canada</span>

            </div>
           
            <a href="#" className="text-[#26374a]font-semibold sm:hidden underline">FR</a>
        </div>

      <div className="flexjustify-between flex-col">
        <div className="flex justify-end">
       <a href="#" className=" text-lg underline text-[#26374a] hidden sm:block">Francais</a>
       </div>
        <div className="flex items-center mt-3">

            <input 
                type="text" 
                placeholder="Search Canada.ca" 
                className="flex-grow p-2 border border-gray-300 rounded-l-md sm:w-[400px] focus:border-gray-300"
            />
            <FaSearch  className="bg-[#26374a] text-white h-[43px] px-3 py-2 rounded-r-md  text-[47px] " />
        </div>
        </div>
        </div>
        <hr className="mt-4"/>
        
    </>
  );
}

export default Navbar;
