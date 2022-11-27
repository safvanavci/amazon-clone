const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <div className="text-white">
      <button
        className="w-full h-[49px] py-[15px] bg-[#37475a] hover:bg-[#485769] text-center text-[13px]"
        onClick={goToTop}
      >
        Back to top
      </button>
      <div className="h-[100px] bg-[#232f3f] fic justify-center">
        <div className="w-[76px] h-[23px]">
          <img src="https://i.hizliresim.com/4fsd5b2.png" alt="" />
        </div>
      </div>
      <div className="h-[300px] bg-[#131a23] text-[12px] fc items-center justify-center">
        <div className="flex gap-x-5">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
        </div>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}
