'use client';

import React, { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [buttonClick, setbuttonClick] = useState(false);
// TODO: Fix Button Click Animation

  const handleClick = () => {
    (buttonClick) ? setbuttonClick(false) : setbuttonClick(true);
  }
  return (
    <div className="flex  justify-between items-center  top-0 left-0 w-full z-50 px-6 md:px-20 ">
      <div className="flex">
        <Image src={"/logo.png"} width={80} height={20} />
      </div>
      <div>
        <button className="text-white flex flex-col pt-4 items-end" onClick={handleClick}>
          <div className="flex justify-center w-[45px] h-[35px] bg-[#3B3B3B] rounded-md lg:hidden">
            <RxHamburgerMenu className="h-4 w-4 my-auto cursor-pointer lg:hidden" />
          </div>
          <div className="mt-[15px]  text-gray-300 text-md hidden lg:block">
            {buttonClick? (<button className="text-white" onClick={handleClick}>
             <div className="flex flex-col justify-around items-center w-[205px] h-[90px] border rounded-md font-inter uppercase ">
              <div className="">
              <p>
                Log
              </p>
              
              </div>
              <div className="">
              Get all three
              </div>
              </div>
            </button>) : 'LOG IN'}
          </div>
          
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
