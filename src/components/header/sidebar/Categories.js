import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="overflow-x-auto h-full pb-[50px]">
      <div className="mt-[7px] border-b pb-[6px] border-lightGray">
        <h1 className="text-[18px] font-bold pl-[36px] pt-[13px] pb-[5px]">
          Fashion
        </h1>
        <Link to={"category/womens-dresses"} className="sidebar-category group">
          <p> Womens Dresses</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/womens-shoes"} className="sidebar-category group">
          <p> Womens Shoes</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/mens-shirts"} className="sidebar-category group">
          <p> Mens Shirts</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"categorymens-shoes/"} className="sidebar-category group">
          <p> Mens Shoes</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
      </div>

      <div className="mt-[7px] border-b pb-[6px] border-lightGray">
        <h1 className="text-[18px] font-bold pl-[36px] pt-[13px] pb-[5px]">
          Electronic
        </h1>
        <Link to={"category/smartphones"} className="sidebar-category group">
          <p> Smartphones</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/laptops"} className="sidebar-category group">
          <p> Laptops</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
      </div>

      <div className="mt-[7px] border-b pb-[6px] border-lightGray">
        <h1 className="text-[18px] font-bold pl-[36px] pt-[13px] pb-[5px]">
          Accessory
        </h1>
        <Link to={"category/mens-watches"} className="sidebar-category group">
          <p> Mens Watches</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/womens-watches"} className="sidebar-category group">
          <p> Womens Watches</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/womens-bags"} className="sidebar-category group">
          <p> Womens Bags</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link
          to={"category/womens-jewellery"}
          className="sidebar-category group"
        >
          <p> Womens Jewellery</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/sunglasses"} className="sidebar-category group">
          <p>Sunglasses</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
      </div>

      <div className="mt-[7px] border-b pb-[6px] border-lightGray">
        <h1 className="text-[18px] font-bold pl-[36px] pt-[13px] pb-[5px]">
          Other
        </h1>
        <Link to={"category/automotive"} className="sidebar-category group">
          <p> Automotive</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/motorcycle"} className="sidebar-category group">
          <p>Motorcycle</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/lighting"} className="sidebar-category group">
          <p>Lighting</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link
          to={"category/home-decoration"}
          className="sidebar-category group"
        >
          <p>Home Decoration</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/furniture"} className="sidebar-category group">
          <p>Furniture</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/skincare"} className="sidebar-category group">
          <p>Skincare</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
        <Link to={"category/fragrances"} className="sidebar-category group">
          <p>Fragrances</p>
          <IoIosArrowForward className="sidebar-arrow" />
        </Link>
      </div>
    </div>
  );
}
