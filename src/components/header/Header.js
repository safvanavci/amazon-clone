import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [first, setfirst] = useState("border-transparan");

  const deneme = () => {
    first === "border-transparan"
      ? setfirst("border-orange ")
      : setfirst("border-transparan");
  };

  return (
    <>
      <div className="h-[60px] bg-black text-white flex gap-x-2 clear-both px-4 items-center">
        <div className="w-[113px] h-[50px] flex  items-center border border-black  hover:border-white pt-[5px] pr-[10px] pl-[5px] rounded-sm  ">
          <img src="https://i.hizliresim.com/4fsd5b2.png" alt="" />
        </div>
        <div className="h-[50px] flex items-center border border-black  hover:border-white rounded-sm text-xs font-normal pl-[3px] pr-[9px] ">
          <HiOutlineLocationMarker size={19} className="mt-2 mr-[1px]" />
          <div>
            <p className="text-[#ccc]">Deliver to</p>
            <h1 className="font-bold text-sm leading-3">Turkey</h1>
          </div>
        </div>

        <div
          className={`h-[45px] flex border-transparan border-[3px] rounded-md flex-1 overflow-hidden text-black mx-[10px] ${first}`}
        >
          <select
            name=""
            id=""
            className="w-fit cursor-pointer outline-none bg-light border-r border-gray/20 text-center text-xs"
          >
            <option value="">All</option>
            <option value="">selam</option>
            <option value="">deneme</option>
          </select>
          <input
            type="text"
            className="peer h-full w-full outline-none p-2"
            onFocus={deneme}
            onBlur={deneme}
          />
          <div className="bg-[#f4bd6a] w-[45px] flex items-center justify-center hover:bg-orange">
            <BsSearch size={20} />
          </div>
        </div>
        <div className="flex gap-x-1 items-end h-[50px] border border-black  hover:border-white rounded-sm px-[9px] pb-[11px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg"
            className="w-[21px] h-4"
            alt=""
          />
          <div className=" text-sm font-bold leading-none">EN</div>
          <AiFillCaretDown color="gray" size={10} />
        </div>
        <div className="h-[50px] border border-black  hover:border-white rounded-sm flex flex-col justify-center px-2">
          <div className=" text-xs leading-none">Hello, sign in</div>
          <div className=" text-sm flex items-center font-bold">
            Account & Lists <AiFillCaretDown color="gray" size={10} />
          </div>
        </div>
        <div className="h-[50px] border border-black  hover:border-white rounded-sm flex flex-col justify-center px-2">
          <div className=" text-xs leading-none">Returns</div>
          <div className=" text-sm items-center font-bold">& Orders</div>
        </div>
        <div className="flex items-end h-[50px] border border-black  hover:border-white rounded-sm px-2 py-2">
          <FiShoppingCart size={35} />
          <div className=" text-sm items-center font-bold">Cart</div>
        </div>
      </div>
      <div className="flex justify-between gap-x-1 items-center h-[39px] bg-gray text-white text-sm px-4">
        <div className="flex gap-x-1 items-center">
          <div className="flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]">
            <GiHamburgerMenu size={20} />
            <div className=" font-bold">All</div>
          </div>
          <div className="flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]">
            Today's Deals
          </div>
          <div className="flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]">
            Customer Service
          </div>
          <div className="flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]">
            Registry
          </div>
          <div className="flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]">
            Gift Card
          </div>
          <div className="flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]">
            Sell
          </div>
        </div>
        <div>
        <div className="flex gap-x-1 items-center h-7 border border-black  hover:border-white rounded-sm py-2 px-[8px] font-bold">
            Shop great deals now
          </div>
        </div>
      </div>
    </>
  );
}
