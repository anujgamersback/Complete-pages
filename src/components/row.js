import { memo } from "react";

const Row = ({ data, option }) => {
  if (option === "Agents") {
    return <AgentRow data={data} />;
  } else if (option === "Maps") {
    return <MapRow data={data} />;
  } else if (option === "Weapons") {
    return <WeaponRow data={data} />;
  }
}


const MapRow = memo(({ data }) => {
  return (
    <div
      className="absolute top-[0px] left-[60px] w-[815px] h-10 flex text-left text-sm text-gray-100 font-headings-h2 hover:flex hover:w-[815px] hover:h-10"
      id="123"
    >
      <h3 className="m-0 absolute top-[10px] left-[0px] text-inherit leading-[20px] font-normal font-inherit">
        {data.Rank}
      </h3>
      <div className="absolute top-[0px] left-[97px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-10 relative rounded h-10 object-cover"
          alt=""
          src="/rectangle-17867@2x.png"
        />
        <h3 className="m-0 relative text-inherit leading-[20px] font-normal font-inherit">
          Lacto
        </h3>
      </div>
      <h3 className="m-0 absolute top-[10px] left-[291px] text-inherit leading-[20px] font-normal font-inherit">
        {data["Play Rate"]}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[417px] text-inherit leading-[20px] font-normal font-inherit text-semantic-colors-green">
        {data["Atk Round Win %"]}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[588px] text-inherit leading-[20px] font-normal font-inherit text-semantic-colors-green">
        {data["Def Round Win %"]}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[760px] text-inherit leading-[20px] font-normal font-inherit">
        {data.Matches}
      </h3>
    </div>
  );
});



const WeaponRow = memo(({ data }) => {
  return (
    <div
      className="absolute top-[0px] left-[60px] w-[815px] h-10 flex text-left text-sm text-gray-100 font-headings-h2 hover:flex hover:w-[815px] hover:h-10"
      id="123"
    >
      <h3 className="m-0 absolute top-[10px] left-[0px] text-inherit leading-[20px] font-normal font-inherit">
        {data.Rank}
      </h3>
      <div className="absolute top-[0px] left-[50px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-10 relative rounded h-10 object-cover"
          alt=""
          src="/rectangle-17867@2x.png"
        />
        <h3 className="m-0 relative text-inherit leading-[25px] font-normal font-inherit">
          {data.Weapons}
        </h3>
      </div>
      <h3 className="m-0 absolute top-[10px] left-[221px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Kills per round']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[325px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Alt. Kills per round']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[470px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Headshots %']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[590px] text-inherit leading-[20px] font-normal font-inherit">
        {data['BodyShot %']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[720px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Legshot %']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[850px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Avg. Damage']}
      </h3>
    </div>
  );
});


const AgentRow = memo(({ data }) => {
  return (
    <div
    className="relative top-[0px] left-[60px] w-[815px] h-10 flex text-left text-sm text-gray-100 font-headings-h2 hover:flex hover:w-[815px] hover:h-10"
    id="123"
  >
      <h3 className="m-0 relative top-[10px] left-[0px] text-inherit leading-[20px] font-normal font-inherit">
        {data.Rank}
      </h3>
      <div className="relative top-[0px] left-[50px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-10 relative rounded h-10 object-cover"
          alt=""
          src="/rectangle-17867@2x.png"
        />
        <h3 className="m-0 relative text-inherit leading-[25px] font-normal font-inherit">
          {data.Agent}
        </h3>
      </div>
      <h3 className="m-0 absolute top-[10px] left-[201px] text-inherit leading-[20px] font-normal font-inherit">
        {data.KD}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[300px] text-inherit leading-[20px] font-normal font-inherit">
        {data.KDA}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[400px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Win %']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[500px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Pick %']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[600px] text-inherit leading-[20px] font-normal font-inherit">
        {data['Avg. Score']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[710px] text-inherit leading-[20px] font-normal font-inherit">
        {data['First Blood %']}
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[830px] text-inherit leading-[20px] font-normal font-inherit">
        {data.Matches}
      </h3>
    </div>
  );
});

export default Row;
