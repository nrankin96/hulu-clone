import React from "react";
import Image from "next/image";

const Card = ({ title, subtitle, image }) => {
  return (
    <div className="mx-auto  relative " >
      <Image src={image} width={300} height={300} className="rounded-md brightness-75 " />
      <div className="absolute top-0 left-0 text-start ml-2 mt-2 ">
        <p className="text-[12px]">{subtitle}</p>
        <p className="text-[18px] ">{title}</p>
      </div>
    </div>
  );
};

export default Card;
