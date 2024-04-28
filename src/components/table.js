import { memo } from "react";
import Row from "./row";
import { AgentsData } from "./dummyData";
import { MapsData } from "./dummyData";
import { WeaponsData } from "./dummyData";

var dummyData = {}

const Table = memo(({option}) => {
  if(option === "Agents") {
    dummyData= AgentsData;
  }
  else if(option === "Maps") {
    dummyData = MapsData;
  }
  else if(option === "Weapons") {
    dummyData = WeaponsData;
  }
  return (
    <table className="absolute top-[418px] left-[240px] w-[957px] h-[431px]">
      <tbody>
        {dummyData.map((data, index) => (
          <>
            <tr>
              <td className="relative pb-0">
                <div className="relative w-[815px] h-10 flex hover:flex hover:w-[815px] hover:h-10">
                  <Row key={index} data={data} option={option}/>
                </div>
              </td>
            </tr>
          </>
        ))}

      </tbody>
    </table>
  );
});

export default Table;
