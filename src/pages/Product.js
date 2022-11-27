import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../components/product/Content";
import Card from "../components/product/Card";

export default function Product() {
  const params = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setDatas(res.data));
  }, [params.id]);

  return (
    <div className="max-w-[1464px] mx-auto flex py-[60px]">
      <div>
        <img src={datas.thumbnail} alt="" />
      </div>
      <Content datas={datas} />
      <Card datas={datas} />
    </div>
  );
}
