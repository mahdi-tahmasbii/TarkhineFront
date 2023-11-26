"use client";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { Calendar, CalendarProvider } from "zaman";

const MyProfile = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <>
      {/* <CalendarProvider locale="fa" direction="rtl">
        <Calendar
          defaultValue={calendarValue}
          onChange={(day) => setCalendarValue(new Date(day))}
        />
      </CalendarProvider> */}
      <div className="border-2 h-[80vh] md:w-[60vw] md:h-[45vh] rounded-md m-5 md:m-0">
        <div className="m-5">
          <h1 className="font-bold text-lg">پروفایل من</h1>
        </div>
        <div className="border m-2 border-gray-300"></div>

        <form>
          <div className="flex md:flex-row flex-col m-5 gap-5">
            <div className="md:w-[50vw]">
              <Input label="نام" type="text" />
            </div>
            <div className="md:w-[50vw]">
              <Input label="نام خانوادگی" type="text" />
            </div>
          </div>
          <div className="flex  md:flex-row flex-col m-5 gap-5">
            <div className="md:w-[50vw]">
              <Input label="آدرس ایمیل" type="email" />
            </div>
            <div className="md:w-[50vw]">
              <Input label="شماره تلفن" type="tel" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col m-5 gap-5">
            <div className="md:w-[50vw]">
              <Input label="تاریخ تولد (اختیاری)" type="date" dir="rtl" />
            </div>

            <div className="md:w-[50vw]">
              <Input label="نام نمایشی" type="text" />
            </div>
          </div>
          <div className="">
            <Input label="عکس نمایشی" type="file" />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="outlined"
              className="md:w-[317px] w-[290px] relative md:text-sm"
              color="green"
            >
              <Image
                src={"icons/iconSax/outLine/edit-2.svg"}
                alt={"edit"}
                width={24}
                height={24}
                className="absolute right-14 top-2"
              />
              ویرایش اطلاعات شخصی
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyProfile;
