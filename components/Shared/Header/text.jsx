"use client";
import React, { useEffect, useState } from "react";
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

export function Auth() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => setOpen((cur) => !cur);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [nextStep, setNextStep] = useState(1);

  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(120);
  const [timeOut, setTimeOut] = useState(false);
  const [startoverCount, setStartoverCount] = useState(false);
  const [on, setOn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      if (countdown === 0) {
        setOn(false);
        console.log(on);
      }
    };
  }, [countdown]);

  const handleOtpChange = (index, value) => {
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    setOtpDigits(newOtpDigits);
  };

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
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 text-center">
            <div className="flex justify-between mb-5">
              {nextStep === 1 && (
                <>
                  <button onClick={handleClose}></button>
                </>
              )}
              {nextStep === 2 && (
                <>
                  <button
                    className=""
                    onClick={() => {
                      setNextStep(1);
                    }}
                  >
                    <Image
                      src={"icons/IconSax/outline/arrow-right-1.svg"}
                      width={24}
                      height={24}
                      alt="tarkhineh_logo"
                      className=""
                    />
                  </button>
                </>
              )}
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
              {nextStep === 1 ? <>ورود / ثبت نام</> : <>کد تایید</>}
            </Typography>
            <Typography className="mb-3 font-normal" variant="p" color="gray">
              {nextStep === 1 ? (
                <>
                  با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
                </>
              ) : (
                <>کد تایید پنج‌رقمی به شماره {nextStep} ارسال شد.</>
              )}
            </Typography>

            {nextStep === 1 ? (
              <>
                <Input
                  label="شماره همراه"
                  size="lg"
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                  value={phoneNumber}
                />
              </>
            ) : (
              <>
                <div
                  dir="ltr"
                  className="flex rounded-md gap-2 justify-center items-end h-10"
                >
                  {otpDigits.map((digit, index) => (
                    <input
                      key={index}
                      type="tel"
                      id={`otp-${index}`}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      required
                      className="text-xl md:w-[50px] w-[40px] h-10 border-2 rounded-md border-black text-center"
                    />
                  ))}
                </div>
              </>
            )}
            {nextStep === 2 && (
              <>
                <div className="flex justify-between">
                  {!on && (
                    <button className="text-green-500 sm:text-[14px] text-[12px]">
                      ارسال مجدد کد
                    </button>
                  )}
                  {on ? (
                    <div className="text-[13px] flex gap-3 text-center">
                      {`${Math.floor(countdown / 60)}:${(countdown % 60)
                        .toString()
                        .padStart(2, "0")}`}{" "}
                      <p className="">تا دریافت مجدد کد</p>
                    </div>
                  ) : null}

                  <button
                    onClick={() => {
                      setNextStep(1);
                    }}
                    className="text-[#417F56] text-[13px]"
                  >
                    ویرایش شماره
                  </button>
                </div>
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            {nextStep === 1 ? (
              <>
                <Button
                  variant="gradient"
                  className="h-12"
                  onClick={() => {
                    setNextStep(2);
                  }}
                  //   disabled
                  fullWidth
                >
                  ادامه
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="gradient"
                  className="h-12"
                  onClick={() => {
                    setNextStep(2);
                  }}
                  fullWidth
                >
                  ثبت کد
                </Button>
              </>
            )}

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
}
