import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/basket/Card";
import Items from "../components/basket/Items";
import NoItem from "../components/basket/NoItem";

export default function Basket() {
  const items = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);

  return (
    <div className="bg-lightGray py-[14px]">
      <div className="flex max-w-fit mx-auto">
        <div className="w-[1550px] bg-white  p-[20px] ">
          {items.length === 0 ? (
            <NoItem />
          ) : (
            <div>
              <div className="border-b border-lightGray">
                <h1 className="text-[28px] leading-none">Shopping Cart</h1>
                <p className="text-[14px] text-end leading-none">Price</p>
              </div>
              {
                items.map(item => <Items key={item.id} item={item}/>)
              }
              

              <div className="fic justify-end">
                <p className="text-[18px]">Subtotal ({items.length} item): </p>
                <p className="py-4 text-[18px] font-bold"> ${total}</p>
              </div>
            </div>
          )}
        </div>
        <Card/>
      </div>
    </div>
  );
}
