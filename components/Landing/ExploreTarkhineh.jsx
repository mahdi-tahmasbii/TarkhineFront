import React from "react";
import EXPTCard from "./EXPTCard";

const ExploreTarkhineh = () => {
  return (
    <>
      <div className="mt-16">
        <div className="text-center">
          <h1 className="font-bold  md:text-2xl text-lg">ترخینه گردی</h1>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-32 gap-y-3  place-items-center">
          <EXPTCard
            title={"شعبه ونک"}
            Img={"/img/txp1.jpg"}
            description={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}
            Href={"/"}
          />{" "}
          <EXPTCard
            title={"شعبه اقدسیه"}
            Img={"/img/txp2.jpg"}
            description={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}
            Href={"/"}
          />{" "}
          <EXPTCard
            title={"شعبه چالوس"}
            Img={"/img/txp1.jpg"}
            description={
              "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"
            }
            Href={"/"}
          />{" "}
          <EXPTCard
            title={"شعبه اکباتان"}
            Img={"/img/txp2.jpg"}
            description={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}
            Href={"/"}
          />
        </div>
      </div>
    </>
  );
};

export default ExploreTarkhineh;
