import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShoppinCart = () => {
  return (
    <>
      <Link href={"/"} className="bg-[#E5F2E9] p-2 rounded-md flex">
        <Image
          src={"/icons/IconSax/outline/shopping-cart.svg"}
          alt="shopping-cart"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </Link>
    </>
  );
};

export default ShoppinCart;
