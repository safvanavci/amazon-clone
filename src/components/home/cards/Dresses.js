import { Link } from "react-router-dom";

export default function Dresses() {
  return (
    <Link to={"category/womens-dresses"}>
      <div className="h-[300px] w-full">
        <img
          className="hf-wf object-cover"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}
