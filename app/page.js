"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { cardBanner } from "@/constants";

export default function Home() {
  return (
    <main>
      <div className="bg-hero bg-cover bg-center w-full h-[650px] md:h-[600px]">
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
          <p className="mt-6 mb-6 text-[14px] hover:cursor-pointer">
            Terms apply
          </p>
          <p className="text-[16px] hover:cursor-pointer">
            Sign up for Hulu Only
          </p>
        </div>
      </div>
      <div className="bg-[#0b0c0f] h-[1000px] relative flex ">
        <div className="text-white absolute text-center mx-4">
          <p className="text-[12px] text-[#00ED82] font-semibold mt-10 mb-6">
            INCLUDED IN ALL PLANS
          </p>
          <h1 className="text-[30px] font-semibold mb-2">
            All The TV You Love
          </h1>
          <p>
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
          <div className="grid grid-cols-2 my-4 gap-4 mt-8">
            {cardBanner.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
