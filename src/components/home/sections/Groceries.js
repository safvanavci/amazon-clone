import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Groceries() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const datas = await axios.get("https://dummyjson.com/products/category/groceries")
    setDatas(datas.data.products)
  }
  
  useEffect(() => {
   getData()
  }, []);

  return (
    <section>
      <h1 className="home-cards-head mt-[10px]">Groceries deals</h1>
      <div className="w-full overflow-x-auto">
        <div className="flex w-fit gap-20">
          {datas?.map((data) => (
            <Link to={`/product/${data.id}`} key={data.id}>
              <div className="w-[200px] h-[200px] ">
                <img
                  src={data.thumbnail}
                  alt=""
                  className="hf-wf object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
