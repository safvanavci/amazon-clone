import { GiHamburgerMenu } from "react-icons/gi";
import { showSidebar } from "../../redux/slices/SidebarSlice";
import { useDispatch } from "react-redux";
import SideBar from "./sidebar/SideBar";

export default function Bottom() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between gap-x-1 items-center h-[39px] bg-gray text-white text-sm px-4">
        <div className="flex gap-x-1 items-center">
          <div
            onClick={() => dispatch(showSidebar())}
            className="cursor-pointer flex gap-x-1 items-center h-7 border border-gray  hover:border-white rounded-sm py-2 px-[8px]"
          >
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
      <SideBar/>
    </>
  );
}
