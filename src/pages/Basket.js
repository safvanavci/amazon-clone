import React from "react";
import Card from "../components/basket/Card";
import Items from "../components/basket/Items";
import NoItem from "../components/basket/NoItem";

export default function Basket() {
  return (
    <div className="bg-lightGray py-[14px]">
      <div className="flex max-w-fit mx-auto">
        <div className="w-[1550px] bg-white  p-[20px] ">
          {/* <NoItem/> */}
          <Items />
        </div>
        <Card />
      </div>
    </div>
  );
}
