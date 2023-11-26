import Image from "next/image";
import React from "react";

const LandingBranchSection = () => {
  return (
    <>
      <div className="mt-32 relative">
        <Image
          src="/img/resturan.png"
          alt="branches"
          width={11110}
          height={11110}
          className="w-screen md:h-[55vh] h-[85vh] relative"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        <div className="absolute text-white lg:top-20 lg:right-14 md:top-14 md:right-14 right-10 top-20 flex md:flex-row flex-col z-30">
          <div className="md:w-[50vw] w-[80vw]">
            <div className="md:space-y-7 space-y-5">
              <h1 className="font-bold md:text-2xl text-xl">
                رستوران‌های زنجیره‌ای ترخینه
              </h1>
              <p className="font-light text-sm md:text-lg">
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
                ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
                رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل
                بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و
                درخور شان شما عزیزان ارائه دهیم.
              </p>
            </div>

            <div className="text-end 2xl:0 mt-3">
              <button className="bg-none border-2 md:px-20 px-10 py-1.5 md:py-2 rounded-md text-white hover:bg-black hover:border-black duration-500 active:py-5 active:px-2">
                اطلاعات بیشتر
              </button>
            </div>
          </div>

          <div className="md:w-[40vw] w-[80vw] grid grid-cols-2 md:mt-0 mt-10 md:gap-0 gap-y-10">
            <div className="flex flex-col items-center justify-center text-center md:gap-y-5 gap-y-2">
              <div>
                <Image
                  src="/icons/IconSax/outline/normal-user.svg"
                  alt="user"
                  width={40}
                  height={40}
                />
              </div>
              <p className="md:font-bold font-light md:text-lg text-sm">
                پرسنلی مجرب و حرفه‌ای
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:gap-y-5 gap-y-2">
              <div>
                <Image
                  src="/icons/IconSax/outline/menu-board.svg"
                  alt="user"
                  width={40}
                  height={40}
                />
              </div>
              <p className="md:font-bold font-light md:text-lg text-sm">
                منوی متنوع
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center text-center md:gap-y-5 gap-y-2">
              <div>
                <Image
                  src="/icons/IconSax/outline/diagram.svg"
                  alt="user"
                  width={40}
                  height={40}
                />
              </div>
              <p className="md:font-bold font-light md:text-lg text-sm">
                کیفیت بالای غذاها
              </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center text-center md:gap-y-5 gap-y-2">
              <div>
                <Image
                  src="/icons/IconSax/outline/home-wifi.svg"
                  alt="user"
                  width={40}
                  height={40}
                />
              </div>
              <p className="md:font-bold font-light md:text-lg text-sm">
                محیطی دلنشین و آرام
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBranchSection;
