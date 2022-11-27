import { Link } from "react-router-dom";

export default function NoItem() {
  return (
    <div className="flex">
      <div className="w-[482px] h-[276px]">
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt=""
        />
      </div>

      <div className="px-10">
        <h1 className="text-[24px] font-bold">Your Amazon Cart is empty</h1>
        <Link>
          <p className="text-[#317285] text-[14px] hover:underline hover:text-[#c7511f]">
            Shop today's deals
          </p>
        </Link>
        <div className="py-4">
          <button className="bg-[#f6d814] px-[10px] rounded-md h-[29px] hover:bg-[#dfc413]">
            Sign in to your account
          </button>
          <button className="px-[10px] rounded-md h-[29px] ml-2 border border-[#d5d9d9] hover:bg-[#eeebeb]">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}
