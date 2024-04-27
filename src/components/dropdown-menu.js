import { memo } from "react";

const DropdownMenu = memo(() => {
  return (
    <div className="absolute top-[312px] left-[249px] flex flex-row items-start justify-start gap-[16px]">
      <section className="rounded-lg bg-grey-colors-dark-mode-600 flex flex-row items-center justify-center py-2 px-3 gap-[8px] text-right text-sm text-grey-colors-dark-mode-white font-headings-h2">
        <div className="w-[85px] relative leading-[20px] inline-block h-[22px] shrink-0">
          Competitive
        </div>
        <div className="flex flex-row items-center justify-start [transform:_rotate(-90deg)]">
          <img
            className="w-6 relative h-6 object-contain [transform:_rotate(90deg)]"
            alt=""
            src="/group-47375.svg"
          />
        </div>
      </section>
      <section className="rounded-lg bg-grey-colors-dark-mode-600 flex flex-row items-center justify-center py-2 px-3 gap-[8px] text-right text-sm text-grey-colors-dark-mode-white font-headings-h2">
        <img
          className="w-6 relative h-[22.4px] overflow-hidden shrink-0"
          alt=""
          src="/platinum3-1.svg"
        />
        <div className="relative leading-[20px]">Platinum 3</div>
        <div className="flex flex-row items-center justify-start [transform:_rotate(-90deg)]">
          <img
            className="w-6 relative h-6 object-contain [transform:_rotate(90deg)]"
            alt=""
            src="/group-47375.svg"
          />
        </div>
      </section>
      <section className="rounded-lg bg-grey-colors-dark-mode-600 flex flex-row items-center justify-center py-2 px-3 gap-[8px] text-right text-sm text-grey-colors-dark-mode-white font-headings-h2">
        <div className="relative leading-[20px]">Ep 7 - Act 1</div>
        <div className="flex flex-row items-center justify-start [transform:_rotate(-90deg)]">
          <img
            className="w-6 relative h-6 object-contain [transform:_rotate(90deg)]"
            alt=""
            src="/group-47375.svg"
          />
        </div>
      </section>
    </div>
  );
});

export default DropdownMenu;
