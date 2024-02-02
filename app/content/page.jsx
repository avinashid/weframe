import React from "react";
import Herosection from "../components/Herosection";
import Article from "../components/Article";
import Stories from "../components/Stories";
import Ads from "../components/Ads";
const page = () => {
  return (
    <div className="  pt-4 md:pl-8 pl-2 bg-gray-50">
      <Herosection />
      <Article />
      <Stories />
      <Ads />
    </div>
  );
};

export default page;
