import { Link } from "react-router-dom";

export default function Tops() {
  return (
    <Link to={"category/tops"}>
      <div className="h3-wf">
        <img
          className="h-1/2 w-full object-cover"
          src="https://i.dummyjson.com/data/products/40/2.jpg"
          alt=""
        />
        <img
          className="h-1/2 w-full object-contain"
          src="https://i.dummyjson.com/data/products/39/1.jpg"
          alt=""
        />
      </div>
    </Link>
  );
}
