import Image from "next/image";
import "./Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  const selectedDate = new Date();
  return (
    <div className="flex items-center justify-between mx-4 md:mx-12 flex-row ">
      <div className="flex items-center gap-4 bg-gray-50 my-2 py-2 px-4 rounded-xl">
        <FaSearch className="cursor-pointer text-xl text-gray-200" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="focus:outline-none bg-gray-50 "
        />
      </div>

      <div className="flex gap-4 bg-gray-50">
        <div className="lg:flex items-center hidden border-gray-300 border-2 rounded-lg py-2 pl-4">
          <input
            className="focus:outline-none bg-gray-50"
            defaultValue={selectedDate.toISOString().split("T")[0]}
            type="date"
            id="dateInput"
          />
          <div className="mr-4">OR</div>
          <input
            className="focus:outline-none w-fit bg-gray-50"
            defaultValue={selectedDate.toISOString().split("T")[0]}
            type="date"
            id="dateInput"
          />
        </div>
        <div className=" border-gray-300 bg-gray-50 relative border-2 rounded-lg py-1 md:py-0  px-2 flex items-center gap-4 lg:min-w-80 pr-10">
          <Image src={"/svg/Girl.svg"} alt="" width={32} height={32} />
          <div className="font-urbanist  flex-col hidden md:flex">
            <div className="text-[10px] font-medium">Welcome back</div>
            <div className="text-[16px] font-medium">Akishita Patel</div>
          </div>
          <div className="absolute right-2 ">
            <RiArrowDownSLine className="text-3xl  text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
