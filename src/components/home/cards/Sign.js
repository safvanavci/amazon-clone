import { Link } from "react-router-dom";

export default function Sign() {
  return (
    <div className=" px-[20px] py-[20px] bg-white h-[150px]">
      <h1 className=" text-[21px] font-bold mb-3">
        Sign in for the best experience
      </h1>
      <button className="h-[29px] bg-[#f6d814] hover:bg-[#e9cc13] w-full rounded-[7px] text-center text-[13px] ">
        Sign in securely
      </button>
    </div>
  );
}
