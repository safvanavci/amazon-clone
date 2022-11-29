import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Fragrances() {
  const [datas, setDatas] = useState([]);

  const getData = async () =>{
    const datas = await axios.get("https://dummyjson.com/products/category/fragrances")
    setDatas(datas.data.products)
  }
  
  useEffect(() => {
    getData()
  }, []);

  return (
    <section>
      <h1 className="home-cards-head mt-[10px]">Fragrances</h1>
      <div className="w-full overflow-x-auto">
        <div className="flex w-fit gap-20">
          {datas?.map((data) => (
            <Link  key={data.id} to={`/product/${data.id}`}>
              <div className="w-[200px] h-[200px] ">
                <img
                  src={data.thumbnail}
                  alt=""
                  className="hf-wf  object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
