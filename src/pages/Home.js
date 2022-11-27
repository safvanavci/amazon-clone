import Cards from "../components/home/cards/Cards";
import Sections from "../components/home/sections/Sections";
import Slides from "../components/home/Slides";

export default function Home() {
  return (
    <div className="bg-[#eaeded]">
      <div className="max-w-[1510px] mx-auto relative h-fit">
        <Slides />
        <Cards />
      </div>
      <div className="xl:h-[500px] h-[100px]"></div>
      <Sections/>
    </div>
  );
}
