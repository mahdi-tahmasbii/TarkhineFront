"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import SearchInput from "./SearchInput";

export default function Search() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-[#E5F2E9] p-2 rounded-md md:block hidden"
      >
        <Image
          src={"/icons/IconSax/outline/search-normal-1.svg"}
          alt="search-normal-1"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </button>
      <Dialog open={open} size="xs" className="" handler={handleOpen}>
        <div className="flex items-center justify-between bg-[#EDEDED]">
          <DialogHeader className="flex flex-col items-center text-center ">
            <Typography className="mb-1" variant="h4"></Typography>
          </DialogHeader>
          <DialogHeader className="flex flex-col items-center text-center mr-3">
            <Typography className="mb-1" variant="h6">
              جستجو
            </Typography>
          </DialogHeader>
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="ml-3 -mt-3"
          >
            <Image
              src={"/icons/IconSax/outline/close-search-input.svg"}
              alt="search-normal-1"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </div>
        <DialogBody>
          <div className="grid gap-6 items-center text-center">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
            </Typography>
            <SearchInput />
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
