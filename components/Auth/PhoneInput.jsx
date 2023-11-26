"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import http from "@/services/httpService";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "@/services/authServices";

const PhoneInput = ({ handleOpen, handleClose, open, setStep }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{11}$/;
    return regex.test(phoneNumber);
  };

  const SendPhoneHandler = async (e) => {
    e.preventDefault();

    const isPhoneNumberValid = validatePhoneNumber(phoneNumber);

    if (isPhoneNumberValid) {
      try {
        const data = await mutateAsync(phoneNumber);
        setStep(2);
        sessionStorage.setItem("phone_number", phoneNumber);
        toast.success("کد اعتبارسنجی با موفقیت ارسال شد");
      } catch (error) {
        toast.error("کد اعتبارسنجی ارسال نشد");
      }
    } else {
      toast.error("شماره اشتباه میباشد");
    }
  };

  return (
    <>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none z-10"
      >
        <Toaster />

        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 text-center">
            <div className="flex justify-between mb-5">
              <button onClick={handleClose}></button>
              <Image
                src={"img/tarkhineh_logo.svg"}
                width={0}
                height={0}
                alt="tarkhineh_logo"
                className="md:w-[8vw] w-[50vw] duration-300"
              />
              <button onClick={handleClose} className="rounded-md text-2xl">
                X
              </button>
            </div>
            <Typography variant="h5" color="blue-gray">
              ورود / ثبت نام
            </Typography>
            <Typography className="mb-3 font-normal" variant="p" color="gray">
              با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
            </Typography>
            <form onSubmit={SendPhoneHandler} className="space-y-6">
              <Input
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                label="شماره همراه"
                size="lg"
                type="tel"
                maxLength={11}
              />
              <Button
                variant="gradient"
                className="h-12"
                fullWidth
                type="submit"
              >
                ادامه
              </Button>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography
              variant="small"
              className="mt-4 flex justify-center text-xs"
            >
              ورود و عضویت در ترخینه به منزله قبول{" "}
              <Link href={"/"} className="text-[#417F56]">
                قوانین و مقررات
              </Link>{" "}
              است.
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default PhoneInput;
