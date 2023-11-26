"use client";
import React from "react";
import SearchInput from "../Shared/Header/SearchInput";
import MenuCard from "./MenuCard";

const LandingMenu = () => {
  return (
    <>
      <div>
        <div className="md:hidden visible m-5">
          <SearchInput />
        </div>
        <div className="text-center">
          <h1 className="font-bold md:mt-16 mt-10 md:text-2xl text-lg">
            منوی رستوران
          </h1>
        </div>
        <div className="md:mt-24 mt-16 grid grid-cols-2 xl:grid-cols-4 gap-y-32  place-items-center">
          <MenuCard title={"غذای اصلی"} img={"img/launch.svg"} />
          <MenuCard title={"پیش غذا"} img={"img/dinner.svg"} />
          <MenuCard title={"دسر"} img={"img/deser.svg"} />
          <MenuCard title={"نوشیدنی"} img={"img/drink.svg"} />
        </div>
      </div>
    </>
  );
};

export default LandingMenu;
