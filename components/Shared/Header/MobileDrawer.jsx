import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import { MobileItemsAccordion } from "./MobileItemsAccordion";

export default function MobileDrawer() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <button onClick={openDrawerRight}>
          <Image
            src={"/icons/IconSax/outline/menu-1.svg"}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className=""
      >
        {/* Logo */}
        <div className="mb-6 flex items-center justify-between relative">
          <Image
            src={"img/tarkhineh_logo_mobile.svg"}
            alt="mobile_logo"
            width={300}
            height={0}
            className=""
          />
          <button className="absolute top-2 left-2" onClick={closeDrawerRight}>
            <Image
              src={"icons/IconSax/outline/close-menu.svg"}
              alt="mobile_logo"
              width={30}
              height={30}
              className=""
            />
          </button>
        </div>

        {/* Accordion */}
        <MobileItemsAccordion />
      </Drawer>
    </>
  );
}
