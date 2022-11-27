import { HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addBasket,setQuantity } from "../../redux/slices/BasketSlice";
export default function Card({ datas }) {

  const dispatch = useDispatch()
  const date = new Date();

  return (
    <div className="w-[242px] h-fit border border-[#d5d9d9] rounded-md  px-[18px] py-[14px]">
      <div>
        <p className="text-[28px] flex items-start leading-none">
          <span className="text-[14px]">$</span>
          {datas.price}
        </p>
      </div>

      <div className="py-[12px]">
        <p className="text-[14px] font-bold">
          <span className="font-[400]">Delivery </span>
          {Date().slice(4, 7)} {date.getDate() + 1}
        </p>
      </div>

      <div className="fic mb-[12px]">
        <HiOutlineLocationMarker size={17} className="mr-[4px]" />

        <span className="text-[12px] text-[#317285]">Deliver to Turkey</span>
      </div>

      <div className="text-[18px] text-[#2c7600] mb-[12px]">
        <p>In Stock.</p>
      </div>

      <div className="relative text-[11px]">
        <span className=" absolute left-3 top-[2px]">Qty:</span>
        <select onChange={(e) =>dispatch(setQuantity(e.target.value))} className="w-[67px] h-[20px] bg-lightGray text-right px-[4px] pb-[1px] rounded-md border border-[#d5d9d9] cursor-pointer">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className="py-[10px]">
        <button className="w-full bg-[#f6d814] hover:bg-[#ecce10] h-[29px] rounded-full text-[14px] mb-[10px]" onClick={()=> dispatch(addBasket(datas))}>
          Add to Cart
        </button>
        <button className="w-full bg-[#f1a31e] hover:bg-[#dc9316] h-[29px] rounded-full text-[14px]">
          Buy Now
        </button>
      </div>

      <div className="flex gap-x-9 text-[12px] py-[14px]">
        <div className="w-fit">
          <h1>Ships from</h1>
          <h1>Sold by</h1>
        </div>
        <div>
          <h1>Amazon.com</h1>
          <h1>Amazon.com</h1>
        </div>
      </div>
    </div>
  );
}
