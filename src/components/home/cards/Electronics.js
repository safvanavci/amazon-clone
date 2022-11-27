import { Link } from "react-router-dom";

export default function Electronics() {
  return (
    <Link to={"category/laptops"}>
      <div className="h3-wf">
        <img
          className="hf-wf object-cover"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}
