import { useEffect, useState } from "react";

export function RightHero() {
  const [top, setTop] = useState("translate-y-10 opacity-0");
  const [scaleCircle, setScaleCircle] = useState("scale-0");

  setTimeout(() => {
    setScaleCircle(() => "scale-100");
  }, 800);

  useEffect(() => {
    setTimeout(() => {
      setScaleCircle(() => "scale-125");
    }, 600);
  }, []);

  setTimeout(() => {
    setTop("translate-y-0 opacity-100");
  }, 1000);

  return (
    <div className="flex flex-col w-1/3 bg-gray-200 px-5 pt-5 rounded-br-[6rem]">
      <div className="flex items-center justify-center h-full relative">
        <div
          className={
            " flex w-96 h-96 p-4 m-4 rounded-full bg-secondary/30 transition duration-600 " +
            scaleCircle
          }
        ></div>
        <img
          src="portfolioPic.png"
          alt="image"
          className={
            "absolute rounded-b-full w-[40rem] transition duration-500 top-44 drop-shadow-2xl " +
            top
          }
        />
        <img
          src="flutter.png"
          className="w-24 top-28 -rotate-45 left-24 absolute "
        />
      </div>
    </div>
  );
}
