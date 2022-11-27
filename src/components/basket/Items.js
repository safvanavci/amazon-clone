import { useDispatch } from "react-redux";
import { remove } from "../../redux/slices/BasketSlice";

export default function Items({item}) {
  const dispatch =useDispatch()

  return (

      <div className="border-b border-lightGray flex ">
        <div>
          <img
            className="object-contain w-[180px] h-[180px]"
            src={item.thumbnail}
            alt=""
          />
        </div>

        <div className="p-4 text-[12px] flex-1">
          <h1 className="text-[18px]">{item.title}</h1>
          <p className=" text-[#2c7600]">In Stock</p>
          <div className="flex items-center gap-x-1 py-2">
            <input type="checkbox" /> <span>This is a gift</span>
          </div>

          <div className="flex gap-x-5">
            <div className=" text-[11px]">
              <span >Qty:{item.quantity}</span>
              
            </div>
            <button className="text-green hover:underline" onClick={()=>dispatch(remove(item))}>Delete</button>
          </div>
        </div>

        <div className="py-4 text-[18px] font-bold">${item.price}</div>
      </div>
  );
}
