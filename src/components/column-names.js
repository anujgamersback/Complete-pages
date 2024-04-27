import { memo } from "react";

const ColumnNames = memo(() => {
  return (
    <header className="absolute top-[376px] left-[252px] w-[817px] h-[18px] text-left text-xs text-grey-colors-dark-mode-100 font-headings-h2">
      <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[18px] font-normal font-inherit">
        Rank
      </h1>
      <div className="absolute top-[0px] left-[104px] leading-[18px]">Map</div>
      <div className="absolute top-[0px] left-[299px] leading-[18px]">
        Play Rate
      </div>
      <div className="absolute top-[0px] left-[425px] leading-[18px]">
        Atk Round win%
      </div>
      <div className="absolute top-[0px] left-[596px] leading-[18px]">
        Def Round win%
      </div>
      <div className="absolute top-[0px] left-[768px] leading-[18px]">
        Matches
      </div>
    </header>
  );
});

export default ColumnNames;
