import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Spotlight() {

  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => setDatas(res.data));
  }, []);

  return (
    <section>
      <h1 className="home-cards-head mt-[10px]">Women's Clothing</h1>
      <div className="w-full overflow-x-auto">
        <div className="flex w-fit gap-10">
          {datas?.map((data) => (
            <div className="w-[200px] h-[200px] " key={data.id}>
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
