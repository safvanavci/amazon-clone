import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

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
