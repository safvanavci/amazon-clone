import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-[300px] grid grid-cols-2">
      <Link to={"category/home-decoration"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/26/3.jpg"
            alt=""
          />
          <p>Home Decoration</p>
        </div>
      </Link>
      <Link to={"category/furniture"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/32/3.jpg"
            alt=""
          />
          <p>Furniture</p>
        </div>
      </Link>
      <Link to={"category/fragrances"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/11/2.jpg"
            alt=""
          />
          <p>Fragrances</p>
        </div>
      </Link>
      <Link to={"category/lighting"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/99/3.jpg"
            alt=""
          />
          <p>Lightning</p>
        </div>
      </Link>
    </div>
  );
}
