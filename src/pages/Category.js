import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../components/category/Product";

export default function Category() {
  const params = useParams();
  const [datas, setDatas] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${params.name}`)
      .then((res) => setDatas(res.data.products))
      .finally(() => setLoader(false));
  }, [params.name]);

  return (
    <div className="flex w-fit mx-auto py-5">
      {loader ? (
        <div className="h-[550px] flex items-center">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="max-w-[1500px]">
          <h1 className="text-[20px] mb-2">RESULTS</h1>
          <div className="flex flex-wrap gap-2">
            {datas.map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
