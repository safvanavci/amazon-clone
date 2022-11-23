
export default function Cards() {

  return (
    <div className=" absolute top-[41%] w-full flex gap-y-6 justify-evenly flex-wrap">
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
          Early Black Friday deals are here
        </h1>
      </div>
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
          Shop by Category
        </h1>
      </div>
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
          Health & Personal Care
        </h1>
      </div>

      <div className="w-[350px] h-[420px]">
        <div className=" px-[20px] py-[20px] bg-white h-[150px]">
          <h1 className=" text-[21px] font-bold mb-3">
            Sign in for the best experience
          </h1>
          <button className="h-[29px] bg-[#f6d814] hover:bg-[#e9cc13] w-full rounded-[7px] text-center text-[13px] ">
            Sign in securely
          </button>
        </div>
        <div className="pt-6 flex justify-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
            alt=""
          />
        </div>
      </div>
      
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
        Electronics
        </h1>
      </div>
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
        Gaming accessories
        </h1>
      </div>
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
        Top Deal
        </h1>
      </div>
      <div className="w-[350px] h-[420px] px-[20px] py-[20px] bg-white">
        <h1 className=" text-[21px] font-bold mb-3 leading-[29px]">
        Dresses
        </h1>
      </div>




    </div>
  );
}
