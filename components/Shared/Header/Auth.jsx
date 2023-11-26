"use client";
import OTPCheckInput from "@/components/Auth/OTPCheckInput";
import PhoneInput from "@/components/Auth/PhoneInput";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Auth = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => setOpen((cur) => !cur);
  const [step, setStep] = useState(1);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-white flex gap-2 text-center items-center"
      >
        <Image
          src={"/icons/IconSax/outline/login.svg"}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <h1 className="text-black md:text-base">ورود / ثبت نام</h1>
      </Button>
      {step === 1 ? (
        <PhoneInput
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          step={step}
          setStep={setStep}
        />
      ) : (
        <OTPCheckInput
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          step={step}
          setStep={setStep}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default Auth;
