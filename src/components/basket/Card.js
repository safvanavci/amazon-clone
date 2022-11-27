import React from "react";
import { useSelector } from "react-redux";

export default function Card() {
  const items = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);

  return (
    <div className="w-[300px] h-[145px] bg-white ml-6 p-[20px]">
      <div className="fic h-2">
        <p className="text-[18px]">Subtotal ({items.length} item): </p>
        <p className="py-4 text-[18px] font-bold"> ${total}</p>
      </div>
      <div className="flex text-[14px] items-center gap-x-1 py-3">
        <input type="checkbox" /> <span>This order contains a gift</span>
      </div>
      <button className="w-full bg-[#f6d814] hover:bg-[#ecce10] h-[29px] rounded-md text-[13px] mb-[10px]">
        Proceed to checkout
      </button>
    </div>
  );
}
