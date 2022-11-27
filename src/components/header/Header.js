import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import Search from "./Search";
import Bottom from "./Bottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.basket.items);

  return (
    <>
      <div className="h-[60px] bg-black text-white flex gap-x-2 clear-both px-4 items-center">
        <Link to="/">
          <div className="w-[113px] h-[50px] flex  items-center border border-black  hover:border-white pt-[5px] pr-[10px] pl-[5px] rounded-sm  ">
            <img src="https://i.hizliresim.com/4fsd5b2.png" alt="" />
          </div>
        </Link>
        <div className="h-[50px] hidden md:flex items-center border border-black  hover:border-white rounded-sm text-xs font-normal pl-[3px] pr-[9px] ">
          <HiOutlineLocationMarker size={19} className="mt-2 mr-[1px]" />
          <div>
            <p className="text-[#ccc]">Deliver to</p>
            <h1 className="font-bold text-sm leading-3">Turkey</h1>
          </div>
        </div>

        <Search />

        <div className="hidden md:flex gap-x-1 items-end h-[50px] border border-black  hover:border-white rounded-sm px-[9px] pb-[11px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg"
            className="w-[21px] h-4"
            alt=""
          />
          <div className=" text-sm font-bold leading-none">EN</div>
          <AiFillCaretDown color="gray" size={10} />
        </div>

        <div className="h-[50px] border border-black  hover:border-white rounded-sm hidden md:flex flex-col justify-center px-2">
          <div className=" text-xs leading-none">Hello, sign in</div>
          <div className=" text-sm flex items-center font-bold">
            Account & Lists <AiFillCaretDown color="gray" size={10} />
          </div>
        </div>

        <div className="h-[50px] border border-black  hover:border-white rounded-sm hidden md:flex flex-col justify-center px-2">
          <div className=" text-xs leading-none">Returns</div>
          <div className=" text-sm items-center font-bold">& Orders</div>
        </div>
        <Link to="/basket">
          <div className="flex items-end h-[50px] border border-black  hover:border-white rounded-sm px-2 py-2 relative">
            <span className="text-orange text-[20px] leading-none font-bold absolute top-1 left-6 bg-black">
              {items.length}
            </span>
            <FiShoppingCart size={35} />
            <div className=" text-sm items-center font-bold">Cart</div>
          </div>
        </Link>
      </div>

      <Bottom />
    </>
  );
}
