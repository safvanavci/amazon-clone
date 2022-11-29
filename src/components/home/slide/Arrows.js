import { GrNext, GrPrevious } from "react-icons/gr";

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-[2px] right-0 w-[80px] h-[250px]  border-transparent fic justify-center rounded-sm focus:border-green outline-white outline-2 focus:outline focus:border-2"
      onClick={onClick}
    >
      <GrNext size={40} />
    </button>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute z-10 top-[2px] left-0 w-[80px] h-[250px] rounded-sm focus:border-green outline-white outline-2 focus:outline  focus:border-2 fic justify-center"
      onClick={onClick}
    >
      <GrPrevious size={40} />
    </button>
  );
}
