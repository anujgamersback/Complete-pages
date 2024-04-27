import { memo } from "react";

const Box = memo(() => {
  return (
    <main className="absolute top-[136px] left-[calc(50%_-_500px)] rounded-2xl bg-gray-300 shadow-[0px_8px_64px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(80px)] w-[1000px] h-[776px]" />
  );
});

export default Box;
