import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="w-full h-[300px] grid grid-cols-2">
      <Link to={"category/smartphones"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/5/2.jpg"
            alt=""
          />
          <p>Smartphones</p>
        </div>
      </Link>
      <Link to={"category/lighting"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/97/4.webp"
            alt=""
          />
          <p>Lighting</p>
        </div>
      </Link>
      <Link to={"category/mens-shoes"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/60/1.jpg"
            alt=""
          />
          <p>Mens Shoes</p>
        </div>
      </Link>
      <Link to={"category/motorcycle"}>
        <div className="text-[12px] w-[147px]">
          <img
            className="w-[140px] h-[102px] object-cover"
            src="https://i.dummyjson.com/data/products/94/2.jpg"
            alt=""
          />
          <p>Motorcycle</p>
        </div>
      </Link>
    </div>
  );
}
