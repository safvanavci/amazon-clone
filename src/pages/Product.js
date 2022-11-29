import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../components/product/Content";
import Card from "../components/product/Card";
import Loader from "../components/loader/Loader";

export default function Product() {
  const params = useParams();
  const [datas, setDatas] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setDatas(res.data))
      .finally(() => setLoader(false));
  }, [params.id]);

  return (
    <div className="max-w-[1464px] mx-auto py-[60px]">
      {loader ? (
        <div className="h-[550px] fic justify-center">
          <Loader/>
        </div>
      ) : (
        <div className="flex flex-wrap">
          <div>
            <img src={datas.thumbnail} alt="" />
          </div>
          <Content datas={datas} />
          <Card datas={datas} />
        </div>
      )}
    </div>
  );
}
