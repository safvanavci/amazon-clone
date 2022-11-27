import StarRatings from "react-star-ratings";

export default function Content({ datas }) {
  return (
    <div className="flex-1 px-6">
      <div className="text-[24px] leading-[32px] font-[400]">
        <h1>
          {datas.title} / {datas.brand}
        </h1>
      </div>
      <div className="mb-5">
        <StarRatings
          rating={datas.rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
          starEmptyColor="white"
        />
      </div>

      <div className="border-t border-b border-lightGray py-2">
        <p className="text-[28px] flex items-start leading-none py-3">
          <span className="text-[14px]">$</span>
          {datas.price}
        </p>
        <div className="flex gap-x-9 text-[14px] mt-5">
          <div className="w-fit font-bold fc gap-y-3">
            <h1>Brand</h1>
            <h1>Category</h1>
            <h1>Stock</h1>
          </div>
          <div className="fc gap-y-3">
            <h1>{datas.brand}</h1>
            <h1>{datas.category}</h1>
            <h1>{datas.stock}</h1>
          </div>
        </div>
      </div>

      <div className="text-[14px] py-6">
        <h1 className="text-[16px] font-bold">About this item</h1>
        <p>{datas.title}</p>
        <p>{datas.description}</p>
      </div>
    </div>
  );
}
