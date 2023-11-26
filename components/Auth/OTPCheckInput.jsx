"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { checkOtp, getOtp } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import OTPInput from "react-otp-input";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const OTPCheckInput = ({
  handleOpen,
  handleClose,
  open,
  setStep,
  setOpen,
  step,
}) => {
  const router = useRouter();

  const RESEND_TIME = 120;
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const { mutateAsync: mutateSendOtp } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    const phone_number = sessionStorage.getItem("phone_number");
    const OTPcode = otp;

    try {
      const data = await mutateCheckOtp({ phone_number, OTPcode });
      toast.success(data.data.message);
      console.log(data);
      setOpen((cur) => !cur);

      Cookies.set("access_token", data.data.access_token, {
        secure: true,
        sameSite: "Lax",
      });

      Cookies.set("refresh_token", data.data.refresh_token, {
        secure: true,
        sameSite: "Lax",
      });
      router.push("/profile");
    } catch (error) {
      toast.error("کد اعتبارسنجی اشتباه بود");
    }
  };

  const GetOtpHandler = async () => {
    const phoneNumber = sessionStorage.getItem("phone_number");

    try {
      const data = await mutateSendOtp(phoneNumber);
      toast.success("کد اعتبارسنجی با موفقیت ارسال شد");
      setTime(RESEND_TIME);
    } catch (error) {
      toast.error("کد اعتبارسنجی ارسال نشد");
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [step, time]);

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
              کد تایید
            </Typography>
            <Typography className="mb-0 font-normal" variant="p" color="gray">
              <>
                کد تایید پنج‌رقمی به شماره{" "}
                {sessionStorage.getItem("phone_number")}
                ارسال شد.
              </>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <form onSubmit={checkOtpHandler} className="mb-5 space-y-3">
              <div
                dir="ltr"
                className="flex rounded-md gap-2 justify-center items-end h-10"
              >
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "50px",
                    borderBottom: "2px solid black",
                    borderRadius: "3px",
                    margin: "5px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div className="flex justify-between">
                {time > 0 ? (
                  <>
                    <div className="text-[13px] flex gap-3 text-center">
                      <div className="gap-1 flex">
                        <p>{time}</p>
                        <p>تا دریافت مجدد کد</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={GetOtpHandler}
                      className="text-green-500 sm:text-[14px] text-[12px]"
                    >
                      ارسال مجدد کد
                    </button>
                  </>
                )}

                <button
                  onClick={() => {
                    setStep(1);
                  }}
                  className="text-[#417F56] text-[13px]"
                >
                  ویرایش شماره
                </button>
              </div>
              <Button
                variant="gradient"
                className="h-12"
                type="submit"
                fullWidth
              >
                ثبت کد
              </Button>
            </form>

            <Typography
              variant="small"
              className="mt-4 flex justify-center text-xs"
            >
              ورود و عضویت در ترخینه به منزله قبول
              <Link href={"/"} className="text-[#417F56] px-1">
                قوانین و مقررات
              </Link>
              است.
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default OTPCheckInput;

//

//
