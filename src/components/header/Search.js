import { useDispatch, useSelector } from "react-redux";
import { outlineShow } from "../../redux/slices/OutlineSlice";
import { BsSearch } from "react-icons/bs";

export default function Search() {
    
  const dispatch = useDispatch();
  const value = useSelector((state) => state.outline.value);

  return (
    <div
      className={`h-[45px] flex border-transparan border-[3px] rounded-md flex-1 overflow-hidden text-black mx-[10px] ${value}`}
    >
      <select
        name=""
        id=""
        className="w-fit cursor-pointer outline-none bg-light border-r border-gray/20 text-center text-xs"
      >
        <option value="">All</option>
        <option value="">selam</option>
        <option value="">deneme</option>
      </select>
      <input
        type="text"
        className="peer h-full w-full outline-none p-2"
        onFocus={() => dispatch(outlineShow())}
        onBlur={() => dispatch(outlineShow())}
      />
      <div className="bg-[#f4bd6a] w-[45px] flex items-center justify-center hover:bg-orange">
        <BsSearch size={20} />
      </div>
    </div>
  );
}
