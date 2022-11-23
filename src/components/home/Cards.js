import { Link } from "react-router-dom";
import Tops from "./cards/Tops";
import Category from "./cards/Category";
import Home from "./cards/Home";
import Dresses from "./cards/Dresses";
import Skincare from "./cards/Skincare";
import Sign from "./cards/Sign";
import Electronics from "./cards/Electronics";
import Tshirt from "./cards/Tshirt";

export default function Cards() {
  return (
    <div className=" absolute top-[41%] w-full flex gap-y-6 justify-evenly flex-wrap">

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">Top Deal</h1>
        <Tops />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>See all deals</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
          Shop by Category
        </h1>
        <Category />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>See more</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
          Health & Personal Care
        </h1>
        <Skincare />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>Shop now</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px]">
        <Sign />
        <div className="pt-6 flex justify-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
          Electronics
        </h1>
        <Electronics />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>See more</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">T-shirts</h1>
        <Tshirt />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>See more</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">Home</h1>
        <Home />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>See more</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white relative">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">Dresses</h1>
        <Dresses />
        <Link className="absolute bottom-[20px] w-[310px] text-[13px] text-green hover:text-orange hover:underline">
          <p>See more</p>
        </Link>
      </div>
      
    </div>
  );
}
