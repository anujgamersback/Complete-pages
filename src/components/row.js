import { memo } from "react";

const Row = memo(() => {
  return (
    <div
      className="absolute top-[0px] left-[0px] w-[815px] h-10 flex text-left text-sm text-gray-100 font-headings-h2 hover:flex hover:w-[815px] hover:h-10"
      id="123"
    >
      <h3 className="m-0 absolute top-[10px] left-[0px] text-inherit leading-[20px] font-normal font-inherit">
        1
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[291px] text-inherit leading-[20px] font-normal font-inherit">
        12.5 %
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[760px] text-inherit leading-[20px] font-normal font-inherit">
        872,973
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[417px] text-inherit leading-[20px] font-normal font-inherit text-semantic-colors-green">
        50%
      </h3>
      <h3 className="m-0 absolute top-[10px] left-[588px] text-inherit leading-[20px] font-normal font-inherit text-semantic-colors-green">
        64%
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
    </div>
  );
});

export default Row;
