"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import Link from "next/link";

export default function EXPTCard({ title, Img, description, Href }) {
  return (
    <Card className="w-80 lg:w-64 2xl:w-[22.5vw] 2xl:h-96 lg:h-72 h-96 group rounded-md overflow-hidden hover:scale-105 duration-500 delay-300">
      <CardHeader shadow={false} floated={false} className="h-96 ">
        <Image
          width={10000}
          height={10000}
          src={Img}
          alt="card-image"
          className="h-full w-full object-fill"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex text-center items-center justify-center">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="transition-all duration-300 ease-in-out transform opacity-0 group-hover:opacity-100 group-hover:h-auto h-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-white border-2 text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          <Link href={Href}>صفحه شعبه</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
