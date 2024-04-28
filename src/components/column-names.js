import React, { memo } from "react";
import { AgentColumns } from "./Columnnames";
import { MapColumns } from "./Columnnames";
import { WeaponColumns } from "./Columnnames";




const Column = ({ label }) => {
  return (
    <td className="relative">
      <div className="relative text-xs leading-[24px] font-headings-h2 text-grey-colors-dark-mode-100 text-left w-full h-full">
      <span className="inline-block px-9" >{label}</span>
      </div>
    </td>
  );
};

const ColumnNames = memo(({option}) => {
  var columns = [];
  if(option === "Agents") {
    columns = AgentColumns;
  }
  else if(option === "Maps") {
    columns = MapColumns;
  }
  else if(option === "Weapons") {
    columns = WeaponColumns;
  }
  return (
    <table className="absolute top-[376px] left-[250px] w-[817px] h-[18px]">
      <tbody>
        <tr>
          {columns.map((label, index) => (
            <Column key={index} label={label} />
          ))}
        </tr>
      </tbody>
    </table>
  );
});

export default ColumnNames;
