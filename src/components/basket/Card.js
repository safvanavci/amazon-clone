import React from "react";

export default function Card() {
  return (
    <div className="w-[300px] h-[145px] bg-white ml-6 p-[20px]">
      <div className="flex items-center h-2">
        <p className="text-[18px]">Subtotal (1 item): </p>
        <p className="py-4 text-[18px] font-bold"> $549</p>
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
