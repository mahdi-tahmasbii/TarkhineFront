import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="cursor-pointer">
        <Image
          src={"img/tarkhineh_logo.svg"}
          alt="logo"
          width={0}
          height={0}
          className="md:w-[155px] md:h-[51px] w-[122px] h-[40px]"
        />
      </Link>
    </>
  );
};

export default Logo;
