import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../../../redux/slices/SidebarSlice";
import Categories from "./Categories";

export default function SideBar() {
  const dispatch = useDispatch();

  const outside = useSelector((state) => state.sidebar.outside);
  const side = useSelector((state) => state.sidebar.side);

  return (
    <>
      <div
        onClick={() => dispatch(showSidebar())}
        className={`fixed top-0 w-full h-screen bg-[#000]/80 z-40 ${outside}`}
      ></div>
      <div
        className={`${side} fixed  w-[365px] h-screen z-50 top-0 bg-white transition-all duration-300`}
      >
        <div className="bg-gray h-[50px] px-[36px] text-white flex gap-x-3 items-center cursor-pointer relative">
          <FaUserCircle size={27} />
          <div className=" font-bold text-xl">Hello, sign in</div>
          <AiOutlineClose
            onClick={() => dispatch(showSidebar())}
            size={25}
            className="absolute -right-8"
          />
        </div>
        <Categories />
      </div>
    </>
  );
}
