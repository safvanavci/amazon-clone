import { useDispatch, useSelector } from "react-redux";
import { outlineShow } from "../../redux/slices/OutlineSlice";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function Search() {
  const dispatch = useDispatch();
  const location = useLocation()

  const value = useSelector((state) => state.outline.value);

  const [first, setfirst] = useState("");
  const [datas, setDatas] = useState([]);
  
 useEffect(() => {
   setfirst("")
 }, [location])
 
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${first}`)
      .then((res) => setDatas(res.data.products));
  }, [first]);

  const outline = () => {
    dispatch(outlineShow())
  }
  const getValue = (e) => {
    setfirst(e.target.value)
  }

  return (
    <div className="relative flex-1 ">
      <div
        className={`h-[45px] flex border-transparan border-[3px] rounded-md overflow-hidden text-black mx-[10px] ${value}`}
      >
        <select
          name=""
          id=""
          className="w-[60px] cursor-pointer outline-none bg-light border-r border-gray/20 text-center text-xs"
        >
          <option value="">All</option>
        </select>
        <input
          type="text"
          className="peer hf-wf outline-none p-2"
          onFocus={outline}
          onBlur={outline}
          value={first}
          onChange={getValue}
        />
        <div className="bg-[#f4bd6a] w-[45px] fic justify-center hover:bg-orange">
          <BsSearch size={20} />
        </div>
      </div>
      <div className="absolute right-[14px] top-[42px]  text-black w-full pl-[82px] z-50 ">
        {first === "" ? (
          ""
        ) : (
          <div className="bg-white border-t">
            {datas?.map((data) => (
              <Link to={`/product/${data.id}`} key={data.id}>
                <div className="p-[7px] hover:bg-lightGray">{data.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
