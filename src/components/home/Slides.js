import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-[2px] right-0 w-[80px] h-[250px]  border-transparent flex items-center justify-center rounded-sm focus:border-[#398396] outline-white outline-2 focus:outline focus:border-2"
      onClick={onClick}
    >
      <GrNext size={40} />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-[2px] left-0 w-[80px] h-[250px] rounded-sm focus:border-[#398396] outline-white outline-2 focus:outline  focus:border-2 flex items-center justify-center"
      onClick={onClick}
    >
      <GrPrevious size={40} />
    </button>
  );
}

export default function Slides() {
  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            src="https://m.media-amazon.com/images/I/61cYZXdazOL._SX1500_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-[#eaeded] to-white/.8"></div>
    </div>
  );
}
