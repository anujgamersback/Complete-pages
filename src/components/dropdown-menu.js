
import { memo } from "react";
import { MapOption, WeaponOptions, AgentOptions,ProfileOptions} from "./dropdownOptions";

const DropdownMenu = memo(({option}) => {
  let columns = [];
  if(option === "Agents") {
    columns = AgentOptions;
  }
  else if(option === "Maps") {
    columns = MapOption;
  }
  else if(option === "Weapons") {
    columns = WeaponOptions;
  }
  else if(option === "profile") {
    columns = ProfileOptions;
  }
  
  return (
    <div className="absolute top-[312px] left-[270px] flex flex-row items-start justify-start gap-[16px]">
      {columns.map((name, index) => (
        <section key={index} className="rounded-lg bg-grey-colors-dark-mode-600 flex flex-row items-center justify-center py-2 px-3 gap-[8px] text-right text-sm text-grey-colors-dark-mode-white font-headings-h2">
          {
            name === "Platinum 3" && 
            <img
              className="w-6 relative h-[22.4px] overflow-hidden shrink-0"
              alt=""
              src="/platinum3-1.svg"
            />

          }
          <div className="relative leading-[20px]">{name}</div>
          <div className="flex flex-row items-center justify-start [transform:_rotate(-90deg)]">
            <img
              className="w-6 relative h-6 object-contain [transform:_rotate(90deg)]"
              alt=""
              src="/group-47375.svg"
            />
          </div>
        </section>
      ))}
    </div>
  );
});

export default DropdownMenu;
