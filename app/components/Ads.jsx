import React from "react";
import Image from "next/image";
const Ads = () => {
  return (
    <div className=" mt-4 ">
      <div className="font-semibold">Top Articles</div>
      <div className="flex  gap-4 overflow-y-scroll scrollbar-none max-w-full">
        <div className="flex   gap-3   shadow-lg min-w-fit font-urbanist overflow-hidden bg-white my-5 rounded-xl">
          <Image
            src={"/images/ad1.jpeg"}
            alt=""
            width={226}
            height={216}
            className=" object-cover"
          />
          <div className="flex flex-col gap-2 p-4 max-w-xs justify-between">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-2xl">Build your business</div>
            </div>
            <div className="text-gray-400">
              Shopify has all the tools you need to start, sell, market, and
              manage.
            </div>

            <div className="flex justify-between w-full gap-3">
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <button className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex max-w-md gap-3 min-w-fit shadow-lg w-fit font-urbanist overflow-hidden bg-white my-5 rounded-xl">
          <Image
            src={"/images/ad2.png"}
            alt=""
            width={226}
            height={216}
            className=" object-cover"
          />
          <div className="flex flex-col gap-2 p-4 max-w-xs justify-between">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-2xl">Libre Coffee</div>
            </div>
            <div className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              possimus, ist
            </div>

            <div className="flex justify-between w-full gap-3">
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <button className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex max-w-md gap-3 min-w-fit shadow-lg w-fit font-urbanist overflow-hidden bg-white my-5 rounded-xl">
          <Image
            src={"/images/ad3.jpeg"}
            alt=""
            width={226}
            height={216}
            className=" object-cover object-left"
          />
          <div className="flex flex-col gap-2 p-4 max-w-xs justify-between">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-2xl">KFC</div>
            </div>
            <div className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              possimus, tempor
            </div>

            <div className="flex justify-between w-full gap-3">
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <button className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
