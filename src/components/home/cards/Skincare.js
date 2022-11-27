import { Link } from "react-router-dom";

export default function Skincare() {
  return (
    <Link to={"category/skincare"}>
      <div className="h-[300px] w-full">
        <img
          className="hf-wf object-cover"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}
