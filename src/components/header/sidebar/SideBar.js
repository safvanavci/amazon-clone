import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../../../redux/slices/SidebarSlice";
import Categories from "./Categories";

export default function SideBar() {
  const dispatch = useDispatch();

  const side = useSelector((state) => state.sidebar.side);

  const handleSide = () => {
    dispatch(showSidebar())
  }
  
  return (
    <>
      <div
        onClick={handleSide}
        className={`fixed top-0 w-full h-screen bg-[#000]/80 z-40 ${side === true ? "hidden" : ""}`}
      ></div>
      <div
        className={`${side === true ? "-left-[397px]" : "left-0"} fixed  w-[365px] h-screen z-50 top-0 bg-white transition-all duration-300`}
      >
        <div className="bg-gray h-[50px] px-[36px] text-white fic gap-x-3  cursor-pointer relative">
          <FaUserCircle size={27} />
          <div className=" font-bold text-xl">Hello, sign in</div>
          <AiOutlineClose
            onClick={handleSide}
            size={25}
            className="absolute -right-8"
          />
        </div>
        <Categories />
      </div>
    </>
  );
}
