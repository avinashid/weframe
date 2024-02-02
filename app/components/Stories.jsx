import React from "react";
import Image from "next/image";
import Link from "next/link";
const Stories = () => {
  return (
    <div className="overflow-y-scroll scrollbar-none mt-4">
      <div className="font-semibold">Top Stories</div>
      <div className="overflow-y-scroll scrollbar-none flex gap-4 max-w-full">
        <div className="min-w-fit relative w-fit font-urbanist   my-5 rounded-xl">
          <Image
            src={"/images/stories1.jpeg"}
            alt=""
            width={340}
            height={500}
            className="rounded-xl aspect-[0.68]  brightness-50"
          />
          <div className="flex-1 justify-between absolute flex gap-2 right-4 top-2">
            <button className="px-3 py-1 flex items-center gap-1 bg-purple-100 font-bold text-xs rounded-md text-purple-700">
              <Image
                src={"/svg/Eye.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
              428
            </button>
            <button className="px-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
              <Image
                src={"/svg/Analytics.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
            </button>
          </div>
          <div className="absolute flex flex-col gap-2 bottom-0 p-4 max-w-full">
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-xl text-white">
                How 7 lines code turned into $36 Billion Empire
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-bold text-white">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
              <button className="px-4 py-2   ml-auto bg-white font-semibold text-sm rounded-lg text-green-700">
                Published
              </button>
            </div>

            <Link
              href={"/stories"}
              className="flex justify-between w-full gap-3"
            >
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <div className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative min-w-fit font-urbanist   my-5 rounded-xl">
          <Image
            src={"/images/stories2.jpeg"}
            alt=""
            width={340}
            height={500}
            className="rounded-xl aspect-[0.68] object-cover  brightness-50"
          />
          <div className=" justify-between absolute flex gap-2 right-4 top-2">
            <button className="px-3 py-1 flex items-center gap-1 bg-purple-100 font-bold text-xs rounded-md text-purple-700">
              <Image
                src={"/svg/Eye.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
              428
            </button>
            <button className="px-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
              <Image
                src={"/svg/Analytics.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
            </button>
          </div>
          <div className="absolute flex flex-col gap-2 bottom-0 p-4 max-w-full">
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-xl text-white">
                Chez pierre restaurant in Monte Carlo by Vuidafieri
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-bold text-white">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
              <button className="px-4 py-2   ml-auto bg-purple-50 font-semibold text-sm rounded-lg text-purple-700">
                Created
              </button>
            </div>

            <Link
              href={"/stories"}
              className="flex justify-between w-full gap-3"
            >
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <div className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative min-w-fit font-urbanist   my-5 rounded-xl">
          <Image
            src={"/images/stories3.jpeg"}
            alt=""
            width={340}
            height={500}
            className="rounded-xl aspect-[0.68]  brightness-50"
          />
          <div className=" justify-between absolute flex gap-2 right-4 top-2">
            <button className="px-3 py-1 flex items-center gap-1 bg-purple-100 font-bold text-xs rounded-md text-purple-700">
              <Image
                src={"/svg/Eye.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
              428
            </button>
            <button className="px-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
              <Image
                src={"/svg/Analytics.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
            </button>
          </div>
          <div className="absolute flex flex-col gap-2 bottom-0 p-4 max-w-full">
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-xl text-white">
                Teknion wins Gold at 2022 International Design Awards
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-bold text-white">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
              <button className="px-4 py-2   ml-auto bg-gray-100 font-semibold text-sm rounded-lg text-gray-500">
                Draft
              </button>
            </div>

            <Link
              href={"/stories"}
              className="flex justify-between w-full gap-3"
            >
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <div className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="min-w-fit relative w-fit font-urbanist   my-5 rounded-xl">
          <Image
            src={"/images/stories4.jpeg"}
            alt=""
            width={340}
            height={500}
            className="rounded-xl aspect-[0.68] object-cover  brightness-50"
          />
          <div className="flex-1 justify-between absolute flex gap-2 right-4 top-2">
            <button className="px-3 py-1 flex items-center gap-1 bg-purple-100 font-bold text-xs rounded-md text-purple-700">
              <Image
                src={"/svg/Eye.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
              428
            </button>
            <button className="px-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
              <Image
                src={"/svg/Analytics.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
            </button>
          </div>
          <div className="absolute flex flex-col gap-2 bottom-0 p-4 max-w-full">
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-xl text-white">
                How 7 lines code turned into $36 Billion Empire
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-bold text-white">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
              <button className="px-4 py-2   ml-auto bg-white font-semibold text-sm rounded-lg text-green-700">
                Published
              </button>
            </div>

            <Link
              href={"/stories"}
              className="flex justify-between w-full gap-3"
            >
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <div className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative min-w-fit font-urbanist   my-5 rounded-xl">
          <Image
            src={"/images/stories5.jpeg"}
            alt=""
            width={340}
            height={500}
            className="rounded-xl aspect-[0.68] object-cover  brightness-50"
          />
          <div className=" justify-between absolute flex gap-2 right-4 top-2">
            <button className="px-3 py-1 flex items-center gap-1 bg-purple-100 font-bold text-xs rounded-md text-purple-700">
              <Image
                src={"/svg/Eye.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
              428
            </button>
            <button className="px-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
              <Image
                src={"/svg/Analytics.svg"}
                className="fill-purple-500"
                height={14}
                width={14}
                alt=""
              />
            </button>
          </div>
          <div className="absolute flex flex-col gap-2 bottom-0 p-4 max-w-full">
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-xl text-white">
                Chez pierre restaurant in Monte Carlo by Vuidafieri
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-bold text-white">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
              <button className="px-4 py-2   ml-auto bg-purple-50 font-semibold text-sm rounded-lg text-purple-700">
                Created
              </button>
            </div>

            <Link
              href={"/stories"}
              className="flex justify-between w-full gap-3"
            >
              <button className="px-6 py-3 flex-1 bg-purple-100 font-bold rounded-lg text-purple-700">
                View
              </button>
              <div className="px-4 py-1 bg-gray-100 font-bold rounded-lg text-gray-400">
                <span className="text-3xl">•••</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
