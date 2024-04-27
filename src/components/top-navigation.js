import { memo, useMemo } from "react";

const TopNavigation = memo(
  ({
    group16,
    topNavigationMargin,
    topNavigationPosition,
    topNavigationTop,
    topNavigationLeft,
  }) => {
    const topNavigationStyle = useMemo(() => {
      return {
        margin: topNavigationMargin,
        position: topNavigationPosition,
        top: topNavigationTop,
        left: topNavigationLeft,
      };
    }, [
      topNavigationMargin,
      topNavigationPosition,
      topNavigationTop,
      topNavigationLeft,
    ]);

    return (
      <div
        className="w-[1440px] [background:linear-gradient(rgba(20,_21,_23,_0.8),_rgba(20,_21,_23,_0.8)),_linear-gradient(180deg,_)] shadow-[0px_4px_16px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(160px)] max-w-full flex flex-row items-center justify-between py-3 px-10 box-border text-right text-xs text-grey-colors-dark-mode-white font-headings-h2"
        style={topNavigationStyle}
      >
        <img className="w-8 relative h-8 object-cover" alt="" src={group16} />
        <div className="w-[987px] flex flex-row items-start justify-between">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="w-[532px] rounded-lg bg-grey-colors-dark-mode-500 shadow-[0px_8px_64px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(80px)] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-6 box-border">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/magnifier-1.svg"
              />
            </div>
            <div className="w-[72px] rounded-lg bg-grey-colors-dark-mode-500 shadow-[0px_8px_64px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(80px)] h-9 flex flex-row items-center justify-center py-2 px-4 box-border">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="w-12 relative h-9">
                <div className="absolute top-[4px] left-[0px] rounded-lg bg-grey-colors-dark-mode-500 shadow-[0px_8px_64px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(80px)] w-8 h-8 flex flex-row items-center justify-center p-1.5 box-border">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/messageschat-3.svg"
                    />
                  </div>
                </div>
                <div className="absolute right-[-2px] bottom-[18px] rounded-lg bg-semantic-colors-red flex flex-row items-start justify-end py-0.5 px-1 border-[2px] border-solid border-grey-colors-dark-mode-700">
                  <div className="relative leading-[12px] font-semibold">
                    234
                  </div>
                </div>
              </div>
              <div className="w-12 relative h-9">
                <div className="absolute top-[4px] left-[0px] rounded-lg bg-grey-colors-dark-mode-500 shadow-[0px_8px_64px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(80px)] w-8 h-8 flex flex-row items-center justify-center p-1.5 box-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/groupuser-3.svg"
                  />
                </div>
                <div className="absolute right-[-2px] bottom-[18px] rounded-lg bg-semantic-colors-red flex flex-row items-start justify-end py-0.5 px-1 border-[2px] border-solid border-grey-colors-dark-mode-700">
                  <div className="relative leading-[12px] font-semibold">
                    234
                  </div>
                </div>
              </div>
              <div className="w-12 relative h-9">
                <div className="absolute top-[4px] left-[0px] rounded-lg bg-grey-colors-dark-mode-500 shadow-[0px_8px_64px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(80px)] w-8 h-8 flex flex-row items-center justify-center p-1.5 box-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/bellnotifications-1.svg"
                  />
                </div>
                <div className="absolute right-[-2px] bottom-[18px] rounded-lg bg-semantic-colors-red flex flex-row items-start justify-end py-0.5 px-1 border-[2px] border-solid border-grey-colors-dark-mode-700">
                  <div className="relative leading-[12px] font-semibold">
                    234
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-8 relative rounded-[50%] h-8 object-cover"
              alt=""
              src="/ellipse-1407@2x.png"
            />
          </div>
        </div>
      </div>
    );
  },
);

export default TopNavigation;
