import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className="mt-10">
      <div className="head grid gap-2">
        <div className="text-3xl font-semibold font-urbanist ">
          Hello Admin,
        </div>
        <div className="font-light text-gray-600">
          This is what we got you for today.
        </div>
      </div>
      <div className="subhead flex gap-8  items-center mt-10 overflow-x-scroll scrollbar-none">
        <div className="rounded-xl flex gap-2 bg-white w-fit p-7 pr-12 flex-1 min-w-fit">
          <div className="p-4 bg-blue-100 w-fit aspect-square flex justify-center rounded-full shadow-inner">
            <Image src={"/svg/Article.svg"} alt="" width={30} height={30} />
          </div>
          <div className="">
            <div className="text-xl font-semibold font-urbanist ">Articles</div>
            <div className="font-normal ">4,950 New Updates</div>
          </div>
        </div>
        <div className="rounded-xl flex gap-2 bg-white w-fit p-7 pr-12 flex-1 min-w-fit">
          <div className="p-4 bg-blue-100 w-fit aspect-square flex justify-center rounded-full shadow-inner">
            <Image src={"/svg/Application.svg"} alt="" width={30} height={30} />
          </div>
          <div>
            <div className="text-xl font-semibold font-urbanist ">
              Categories
            </div>
            <div className="font-normal ">10,275 New Updates</div>
          </div>
        </div>
        <div className="rounded-xl flex gap-2 bg-white w-fit p-7 pr-12 flex-1 min-w-fit">
          <div className="p-4 bg-blue-100 w-fit aspect-square flex justify-center rounded-full shadow-inner">
            <Image src={"/svg/Books.svg"} alt="" width={30} height={30} />
          </div>
          <div>
            <div className="text-xl font-semibold font-urbanist ">Stories</div>
            <div className="font-normal ">4,193 New Updates</div>
          </div>
        </div>
        <div className="rounded-xl flex gap-2 bg-white w-fit p-7 pr-12 flex-1 min-w-fit">
          <div className="p-4 bg-blue-100 w-fit aspect-square flex justify-center rounded-full shadow-inner">
            <Image src={"/svg/Ads.svg"} alt="" width={30} height={30} />
          </div>
          <div>
            <div className="text-xl font-semibold font-urbanist ">
              Advertisements
            </div>
            <div className="font-normal ">950 New Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
