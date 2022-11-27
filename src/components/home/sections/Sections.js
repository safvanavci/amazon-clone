import Fragrances from "./Fragrances";
import Groceries from "./Groceries";
import Auto from "./Auto";


export default function Sections() {
  return (
    <div className="max-w-[1510px] mx-auto p-[1.5rem] flex flex-col gap-y-6 ">
      <Auto/>
      <Fragrances/>
      <Groceries/>
    </div>
  );
}
