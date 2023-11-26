"use client";
import React from "react";
import Logo from "../Logo";
import DesktopMenuItems from "./DesktopMenuItems";
import DesktopUserItems from "./DesktopUserItems";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center mt-8 z-20">
        <div id="MobileMenu" className="md:hidden block">
          <div className="p-2 rounded-md">
            <MobileDrawer />
          </div>
        </div>
        <div>
          <Logo />
        </div>
        <div id="Desktop" className="md:block hidden">
          <DesktopMenuItems />
        </div>
        <div>
          <DesktopUserItems />
        </div>
      </div>
    </div>
  );
};

export default Header;
