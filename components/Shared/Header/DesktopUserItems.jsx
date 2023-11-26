import React from "react";
import UserDropDown from "./UserDropDown";
import SearchInput from "./Search";
import ShoppinCart from "./ShoppinCart";

const DesktopUserItems = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="hover:scale-125 duration-300 active:scale-150">
          <SearchInput />
        </div>
        <div className="hover:scale-125 duration-300">
          <ShoppinCart />
        </div>
        <div>
          <UserDropDown />
        </div>
      </div>
    </>
  );
};

export default DesktopUserItems;
