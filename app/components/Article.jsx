import Image from "next/image";
import React from "react";
import { article } from "./article";

const Article = () => {
  return (
    <div className=" mt-4 ">
      <div className="font-semibold">Top Articles</div>
      <div className="overflow-y-scroll scrollbar-none flex  gap-4 max-w-full">
        <div className="flex flex-1  flex-col gap-3 min-w-fit font-urbanist p-4 bg-white my-5 rounded-xl">
          <Image
            src={"/images/article1.jpeg"}
            alt=""
            width={435}
            height={228}
            className="rounded-xl"
          />
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="font-bold text-purple-700">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
            </div>
            <div className="flex gap-2 font-bold items-center ">
              <Image
                src={"/images/Profile.jpeg"}
                alt=""
                width={30}
                height={30}
                className="rounded-full aspect-square object-cover"
              />
              Maria Doe
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-2xl">
              7 Rules of Effective Branding
            </div>
            <button className="px-6 py-3 bg-purple-200 font-bold rounded-lg text-purple-700">
              Created
            </button>
          </div>
          <div className="text-gray-400">
            Why branding matters for your Business
          </div>
          <div className="flex items-center gap-2">
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Branding
            </div>
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Communication
            </div>
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Branding
            </div>
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
        <div className="flex flex-1  flex-col gap-3 min-w-fit font-urbanist p-4 bg-white my-5 rounded-xl">
          <Image
            src={"/images/article2.jpeg"}
            alt=""
            width={435}
            height={228}
            className="rounded-xl"
          />
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="font-bold text-purple-700">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
            </div>
            <div className="flex gap-2 font-bold items-center ">
              <Image
                src={"/images/Profile.jpeg"}
                alt=""
                width={30}
                height={30}
                className="rounded-full aspect-square object-cover"
              />
              Maria Doe
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-2xl">
              Research on biodiversity an...
            </div>
            <button className="px-6 py-3 bg-green-200 font-bold rounded-lg text-green-700">
              Published
            </button>
          </div>
          <div className="text-gray-400">
            Why branding matters for your Business
          </div>
          <div className="flex items-center gap-2">
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Population
            </div>
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              World
            </div>
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
        <div className="flex flex-1 flex-col gap-3 min-w-fit font-urbanist p-4 bg-white my-5 rounded-xl">
          <Image
            src={"/images/article3.jpeg"}
            alt=""
            width={435}
            height={228}
            className="rounded-xl"
          />
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="font-bold text-purple-700">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
            </div>
            <div className="flex gap-2 font-bold items-center ">
              <Image
                src={"/images/Profile.jpeg"}
                alt=""
                width={30}
                height={30}
                className="rounded-full aspect-square object-cover"
              />
              Maria Doe
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-2xl">
              Close and historical ties to h...
            </div>
            <button className="px-6 py-3 bg-purple-200 font-bold rounded-lg text-purple-700">
              Created
            </button>
          </div>
          <div className="text-gray-400">
            Why branding matters for your Business
          </div>
          <div className="flex items-center gap-2">
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Politics
            </div>
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Defence
            </div>
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
        <div className="flex flex-1 flex-col gap-3 min-w-fit font-urbanist p-4 bg-white my-5 rounded-xl">
          <Image
            src={"/images/article1.jpeg"}
            alt=""
            width={435}
            height={228}
            className="rounded-xl"
          />
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="font-bold text-purple-700">BUSINESS</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="font-semibold text-gray-400">20 Sep 2022</div>
            </div>
            <div className="flex gap-2 font-bold items-center ">
              <Image
                src={"/images/Profile.jpeg"}
                alt=""
                width={30}
                height={30}
                className="rounded-full aspect-square object-cover"
              />
              Maria Doe
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-2xl">
              7 Rules of Effective Branding
            </div>
            <button className="px-6 py-3 bg-purple-200 font-bold rounded-lg text-purple-700">
              Created
            </button>
          </div>
          <div className="text-gray-400">
            Why branding matters for your Business
          </div>
          <div className="flex items-center gap-2">
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Branding
            </div>
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Communication
            </div>
            <div className="px-6 py-3 bg-gray-100 font-bold rounded-lg text-gray-400">
              Branding
            </div>
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
  );
};

export default Article;
