import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



export default function Category() {
  const params = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${params.name}`)
      .then((res) => setDatas(res.data.products));
  }, [params.name]);


const date = new Date()

  return (
    <div className="flex w-fit mx-auto py-5">
      <div className="w-[279px]">sa</div>
      <div className="w-[1500px]">
        <h1 className="text-[20px] mb-2">RESULTS</h1>
        <div className="flex justify-between">
          {datas?.map((data) => (
            <div
              key={data.id}
              className="w-[291px] border border-light rounded-sm"
            >
              <Link>
              <div className="w-[273px] h-[273px] bg-[#f9f9f9]">
                <img
                  src={data.thumbnail}
                  alt=""
                  className="object-contain w-full h-full"
                  />
              </div>
                  </Link>
              <div className="flex flex-col gap-3 py-6 px-2">
              <Link>
                <p className="text-[16px] leading-[24px] hover:text-[#c45500]">
                   {data.description}
                </p> </Link>
                <p className="text-[28px] flex items-start leading-none">
                  <span className="text-[14px]">$</span>
                  {data.price}
                </p>
                <p className="text-[14px] font-bold">
                  <span className="font-[400]">Delivery </span>
                  {Date().slice(4,7)} {date.getMonth() + 1 }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
