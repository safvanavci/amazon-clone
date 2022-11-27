import React from "react";

export default function Items() {
  return (
    <>
      <div className="border-b border-lightGray">
        <h1 className="text-[28px] leading-none">Shopping Cart</h1>
        <p className="text-[14px] text-end leading-none">Price</p>
      </div>

      <div className="border-b border-lightGray flex ">
        <div>
          <img
            className="object-contain w-[180px] h-[180px]"
            src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            alt=""
          />
        </div>

        <div className="p-4 text-[12px] flex-1">
          <h1 className="text-[18px]">iPhone 9</h1>
          <p className=" text-[#2c7600]">In Stock</p>
          <div className="flex items-center gap-x-1 py-2">
            <input type="checkbox" /> <span>This is a gift</span>
          </div>

          <div className="flex gap-x-5">
            <div className="relative text-[11px]">
              <span className=" absolute left-3 top-[2px]">Qty:</span>
              <select className="w-[67px] h-[20px] bg-lightGray text-right px-[4px] pb-[1px] rounded-md border border-[#d5d9d9] cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <p className="text-green hover:underline">Delete</p>
          </div>
        </div>

        <div className="py-4 text-[18px] font-bold">$549</div>
      </div>
      <div className="flex items-center justify-end">
        <p className="text-[18px]">Subtotal (1 item): </p>
        <p className="py-4 text-[18px] font-bold"> $549</p>
      </div>
    </>
  );
}
