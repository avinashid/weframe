import Image from "next/image";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const page = () => {
  return (
    <div className="pt-4 md:px-8 overflow-hidden flex flex-col gap-4  max-w-[100%]">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 font-semibold items-center">
          <Image
            src={"/images/Profile.jpeg"}
            width={24}
            height={25}
            alt=""
            className="rounded-full aspect-square"
          />
          <div className="text-gray-500">James Robert</div>
          <div className="text-purple-400 hidden md:block font-normal">
            Created on 13 January 2022
          </div>
        </div>
        <div className="flex gap-2 ">
          <button className="flex items-center bg-gray-50 font-semibold px-3 py-1 rounded-lg shadow-sm">
            Accessibility <MdArrowDropDown className="inline text-3xl" />
          </button>
          <button className="px-2 py-1 items-center bg-gray-50 shadow-sm   font-bold  rounded-lg text-gray-400">
            <span className="text-xl text-purple-600 relative bottom-[2px]">
              •••
            </span>
          </button>
        </div>
      </div>
      <div className=" relative  rounded-xl ">
        <div className=" absolute hidden md:flex rounded-xl -z-10 brightness-75 overflow-hidden min-h-full  max-w-full">
          <Image
            src={"/images/stories6.jpeg"}
            alt=""
            width={1600}
            height={900}
            className=" w-full overflow-hidden scale-110 blur-sm brightness-75"
          />
        </div>
        <div className=" md:bg-gradient-to-r from-gray-500    relative flex justify-center py-4 rounded-xl">
          <div className="bg-gradient-to-t from-black rounded-xl ">
            <Image
              width={560}
              height={800}
              alt=""
              src={"/images/stories6.jpeg"}
              className="aspect-[7/10] object-cover object-center rounded-xl bg-gradient-to-t brightness-50  from-gray-800"
            />
          </div>
          <div className="md:w-[560px] absolute bottom-10 pl-4 flex flex-col gap-4">
            <div className="md:text-5xl text-2xl font-semibold font-urbanist text-white">
              Chez pierre restaurant in Monte Carlo by Vuidafieri Partner
            </div>
            <button className="px-6 py-3 flex-1 w-fit bg-white font-bold rounded-lg text-purple-700">
              Business
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default page;
