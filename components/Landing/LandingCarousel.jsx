"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

export function LandingCarousel() {
  return (
    <Carousel className="rounded-xl mt-5" dir="ltr">
      <div className="relative h-[75vh] w-full">
        <Image
          width={0}
          height={0}
          src={"img/landing.svg"}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-3xl mt-20"
            >
              یک ماجراجویی آشپزی برای تمام حواس
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-14 opacity-80"
            ></Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="bg-[#417F56] text-white font-semibold md:w-52"
              >
                سفارش آنلاین غذا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
