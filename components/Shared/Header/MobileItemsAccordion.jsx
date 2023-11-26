"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { branches, menu } from "@/constants";
import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function MobileItemsAccordion() {
  const [open, setOpen] = useState(0);
  const pathname = usePathname();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="m-5 flex flex-col gap-3" dir="rtl">
        <Link
          href={"/"}
          className={`link ${
            pathname === "/" ? "text-[#417F56]" : "text-[#353535]"
          } flex gap-2 font-medium text-[17px]`}
        >
          <Image
            src={"icons/IconSax/outline/home.svg"}
            width={24}
            height={24}
            alt="home"
          />
          صفحه اصلی
        </Link>
        <hr className="bg-gray-400" />
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="flex font-light"
          >
            <div className="flex gap-2">
              <Image
                src={"icons/IconSax/outline/menu-board-normal.svg"}
                width={24}
                height={24}
                alt="home"
              />
              <p className="font-medium text-[17px] text-[#353535]">منو</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col">
              {menu.map(({ id, title, href }) => (
                <Link
                  key={id}
                  href={href}
                  className={`link ${
                    pathname === `${href}`
                      ? "text-[#417F56] font-medium text-[15px]"
                      : "font-medium text-[15px]"
                  }`}
                >
                  {title}
                </Link>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="">
            <div className="flex gap-2">
              <Image
                src={"icons/IconSax/outline/home-hashtag.svg"}
                width={24}
                height={24}
                alt="home"
              />
              <p className="font-medium text-[17px] text-[#353535]">شعبه</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col">
              {branches.map(({ id, title, href }) => (
                <Link
                  key={id}
                  href={href}
                  className={`link ${
                    pathname === `${href}`
                      ? "text-[#417F56] font-medium text-[15px]"
                      : "font-medium text-[15px]"
                  }`}
                >
                  {title}
                </Link>
              ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Link
          href={"/about-us"}
          className={`link ${
            pathname === "/about-us" ? "text-[#417F56]" : "text-[#353535]"
          } flex gap-2 font-medium text-[17px] py-2`}
        >
          <Image
            src={"icons/IconSax/outline/profile-2user.svg"}
            width={24}
            height={24}
            alt="home"
          />
          درباره ما
        </Link>
        <hr className="bg-gray-400" />
        <Link
          href={"/contact-us"}
          className={`link ${
            pathname === "/contact-us" ? "text-[#417F56]" : "text-[#353535]"
          } flex gap-2 font-medium text-[17px] py-2`}
        >
          <Image
            src={"icons/IconSax/outline/call-calling.svg"}
            width={24}
            height={24}
            alt="home"
          />
          تماس با ما
        </Link>
      </div>
    </>
  );
}
