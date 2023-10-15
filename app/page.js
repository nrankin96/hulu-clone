"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-hero bg-cover bg-center w-full h-[700px] md:h-[600px]">
      <Navbar />
      <div className="flex flex-row space-x-10 justify-center md:mx-20 items-center flex-wrap mt-[140px] md:mt-[80px] text-[#00ED82] text-[13px] font-bold  ">
        <div className="flex flex-col justify-center items-center md:max-w-64 lg:w-[300px] lg:h-[300px]">
          <h3 className="mb-4">Disney Bundle Duo Basic</h3>
          <Image
            src="/logo-bundleDis.png"
            alt="logo-bundle"
            width={150}
            height={200}
          />
          <o className="mt-4 ml-4 text-white text-[16px] md:text-[25px] text-center font-normal">
            Both with ads, for <br /> $9.99/month.
          </o>
          <button className="text-black mt-4 bg-[#00ED82] w-full h-[40px] md:h-[45px]  rounded-md uppercase">
            Get Them Both
          </button>
        </div>
        <div className="flex flex-col md:w-64 justify-center md:max-w-64 lg:w-[300px] lg:h-[300px] items-center">
          <h3 className="mb-4">Disney Bundle Trio Basic</h3>
          <Image
            src="/logo-bundle.png"
            alt="logo-bundle"
            width={180}
            height={300}
          />
          <o className="mt-4 ml-4 text-white text-[16px] md:text-[25px] text-center font-normal">
            All with ads, for <br /> $14.99/month.
          </o>
          <button className="text-black bg-[#00ED82] w-full h-[40px] md:h-[45px] rounded-md uppercase mt-4">
            Get All Three
          </button>
          
        </div>
      </div>
      <div className="text-white text-center text-sm underline font-light  ">
        <p className="mt-6 mb-6 text-[14px]">Terms apply</p>
        <p className="text-[16px]">Sign up for Hulu Only</p>
      </div>
     
      
    </main>
  );
}
