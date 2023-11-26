"use client";
import { Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <>
      <div className="flex relative">
        <Input label="جستجو" />
        <Image
          src={"/icons/IconSax/outline/search.svg"}
          alt="search-normal-1"
          width={24}
          height={24}
          className="cursor-pointer absolute left-3 top-2"
        />
      </div>
    </>
  );
};

export default SearchInput;
