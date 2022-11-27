import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Spotlight() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/automotive")
      .then((res) => setDatas(res.data.products));
  }, []);

  return (
    <section>
      <h1 className="home-cards-head mt-[10px]">Automotive</h1>
      <div className="w-full overflow-x-auto">
        <div className="flex w-fit gap-20">
          {datas?.map((data) => (
            <Link to={`/product/${data.id}`}>
              <div className="w-[200px] h-[200px] " key={data.id}>
                <img
                  src={data.thumbnail}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
