"use client";
import React from "react";
import { navList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="border-2 m-5 md:m-0 md:w-[30vw] h-max rounded-md">
        <div className="flex items-center gap-5 mb-3 ml-20 justify-center mt-5">
          <div>
            <Image
              src={"/img/Footer.png"}
              width={1000000}
              height={1000000}
              alt="user-profile"
              className="h-[88px] w-[88px] rounded-full"
            />
          </div>
          <div className="">
            <h1>username</h1>
            <p>user phone</p>
          </div>
        </div>
        <div className="border m-2 border-gray-300"></div>

        <div className="m-4 space-y-3">
          {navList.map(({ id, title, icon, href }) => (
            <Link
              className={`link ${
                pathname === `${href}`
                  ? "text-[#417F56] border-r-2 border-[#417F56] font-bold"
                  : ""
              } active:scale-125 md:text-lg hover:text-xl duration-300 flex justify-start gap-3`}
              href={href}
            >
              <Image
                src={icon}
                alt={title}
                width={24}
                height={24}
                className=""
              />
              {title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
