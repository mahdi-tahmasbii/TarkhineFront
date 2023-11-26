"use client";
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

const DropDownMenu = ({ title, items }) => {
  return (
    <>
      <Menu>
        <MenuHandler>
          <div className="bg-white text-black cursor-pointer flex font-medium">
            {title}
            <Image
              src={"/icons/ArrowDown.svg"}
              alt="ArrowDown"
              width={16}
              height={16}
            />
          </div>
        </MenuHandler>
        <MenuList>
          {items.map((item) => (
            <MenuItem key={item.id}>
              <Link href={item.href} className="font-medium">
                {item.title}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default DropDownMenu;
