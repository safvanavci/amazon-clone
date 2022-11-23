import { Link } from "react-router-dom";

export default function Tshirt() {
  return (
    <Link to={"category/mens-shirts"}>
      <div className="h-[300px] w-full">
        <img
          className="h-full w-full"
          src="https://i.dummyjson.com/data/products/53/thumbnail.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}
