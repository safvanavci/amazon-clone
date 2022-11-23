import Cards from "../components/home/Cards";
import Slides from "../components/home/Slides";

export default function Home() {
  return (
    <div className="bg-[#eaeded] h-screen">
      <div className="max-w-[1510px] mx-auto relative">
        <Slides />
        <Cards/>
        
      </div>
    </div>
  );
}
