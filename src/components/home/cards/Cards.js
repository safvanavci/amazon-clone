import { Link } from "react-router-dom";
import Tops from "./Tops";
import Category from "./Category";
import Home from "./Home";
import Dresses from "./Dresses";
import Skincare from "./Skincare";
import Sign from "./Sign";
import Electronics from "./Electronics";
import Tshirt from "./Tshirt";

export default function Cards() {
  return (
    <div className="absolute top-[41%] w-full md:flex gap-y-6 justify-evenly flex-wrap">
      <div className="home-cards hidden md:block">
        <h1 className=" home-cards-head">Top Deal</h1>
        <Tops />
        <Link className="card-link" to={"category/tops"}>
          <p>See all deals</p>
        </Link>
      </div>

      <div className="home-cards mx-auto md:mx-0">
        <h1 className=" home-cards-head">Shop by Category</h1>
        <Category />
        <Link className="card-link">
          <p>See more</p>
        </Link>
      </div>

      <div className="home-cards hidden xl:block">
        <h1 className=" home-cards-head">Health & Personal Care</h1>
        <Skincare />
        <Link className="card-link" to={"category/skincare"}>
          <p>Shop now</p>
        </Link>
      </div>

      <div className="w-[350px] h-[420px] hidden lg:block">
        <Sign />
        <div className="pt-6 flex justify-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="home-cards hidden xl:block">
        <h1 className=" home-cards-head">Electronics</h1>
        <Electronics />
        <Link className="card-link" to={"category/laptops"}>
          <p>See more</p>
        </Link>
      </div>

      <div className="home-cards hidden xl:block">
        <h1 className=" home-cards-head">T-shirts</h1>
        <Tshirt />
        <Link className="card-link" to={"category/mens-shirts"}>
          <p>See more</p>
        </Link>
      </div>

      <div className="home-cards hidden 2xl:block">
        <h1 className=" home-cards-head">Home</h1>
        <Home />
        <Link className="card-link" to={"category/home-decoration"}>
          <p>See more</p>
        </Link>
      </div>

      <div className="home-cards hidden 2xl:block">
        <h1 className=" home-cards-head">Dresses</h1>
        <Dresses />
        <Link className="card-link" to={"category/womens-dresses"}>
          <p>See more</p>
        </Link>
      </div>
    </div>
  );
}
