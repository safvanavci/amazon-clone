import Spotlight from "./Spotlight";
import Women from "./Women";
import Auto from "./Auto";

export default function Sections() {
  return (
    <div className="max-w-[1510px] mx-auto p-[1.5rem] flex flex-col gap-y-6 ">
      <Spotlight/>
      <Women/>
      <Auto/>
    </div>
  );
}
