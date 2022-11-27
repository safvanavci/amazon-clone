import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function Product({ data }) {
  const date = new Date();

  return (
    <div className="w-[291px] border border-light rounded-sm mx-auto">
      <Link to={`/product/${data.id}`}>
        <div className="w-[273px] h-[273px] bg-[#f9f9f9]">
          <img
            src={data.thumbnail}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </Link>
      <div className="fc py-6 px-2">
        <Link to={`/product/${data.id}`}>
          <p className="text-[16px] leading-[24px] hover:text-[#c45500]">
            {data.description}
          </p>{" "}
        </Link>
        <StarRatings
          rating={data.rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
          starEmptyColor="white"
        />
        <p className="text-[28px] flex items-start leading-none py-3">
          <span className="text-[14px]">$</span>
          {data.price}
        </p>
        <p className="text-[14px] font-bold">
          <span className="font-[400]">Delivery </span>
          {Date().slice(4, 7)} {date.getDate() + 1}
        </p>
      </div>
    </div>
  );
}
