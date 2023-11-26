import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuCard = ({ title, img }) => {
  return (
    <Link href={"/"}>
      <div className="relative flex justify-center bg-[#417F56] md:h-[23vh] w-[20vh] h-[15vh] md:w-[35vh] rounded-md">
        <div className={`md:-top-24 -top-[6vh] absolute`}>
          <Image
            src={img}
            alt={title}
            width={0}
            height={0}
            className="w-full h-full"
          />
          <div className="flex justify-center">
            <div className="absolute bg-white rounded-md text-black py-2 shadow-md md:w-[135px] w-[80px] md:h-[48] text-center hover:bg-black hover:text-white active:p-10 duration-500">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
