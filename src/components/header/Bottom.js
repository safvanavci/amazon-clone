import { GiHamburgerMenu } from "react-icons/gi";
import { showSidebar } from "../../redux/slices/SidebarSlice";
import { useDispatch } from "react-redux";
import SideBar from "./sidebar/SideBar";

export default function Bottom() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="header-bottom">
        <div className="fic gap-x-1">
          <div
            onClick={() => dispatch(showSidebar())}
            className="cursor-pointer flex header-bottom-box"
          >
            <GiHamburgerMenu size={20} />
            <div className=" font-bold">All</div>
          </div>
          <div className="hidden md:flex header-bottom-box">
            Today's Deals
          </div>
          <div className="hidden md:flex header-bottom-box">
            Customer Service
          </div>
          <div className="hidden md:flex header-bottom-box">
            Registry
          </div>
          <div className="hidden md:flex header-bottom-box">
            Gift Card
          </div>
          <div className="hidden md:flex header-bottom-box">
            Sell
          </div>
        </div>
        <div>
          <div className="flex header-bottom-box font-bold">
            Shop great deals now
          </div>
        </div>
      </div>
      <SideBar/>
    </>
  );
}
