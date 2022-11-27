import { Link } from "react-router-dom";

export default function Tshirt() {
  return (
    <Link to={"category/mens-shirts"}>
      <div className="h3-wf">
        <img
          className="hf-wf"
          src="https://i.dummyjson.com/data/products/53/thumbnail.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}
