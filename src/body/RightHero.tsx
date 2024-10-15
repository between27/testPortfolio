import { useEffect, useState } from "react";

export function RightHero() {
  const logos: FloatingLogoType[] = [
    {
      x: "left-24",
      y: "top-44",
      rotate: "-rotate-45",
      src: "typescript",
    },
    {
      src: "react",
      x: "left-60",
      y: "top-24",
    },
    {
      src: "tailwind",
      x: "right-24",
      y: "top-44",
      rotate: "rotate-45",
    },
    {
      src: "mysql",
      x: "right-24",
      y: "bottom-52",
      rotate: "-rotate-45",
    },
    {
      src: "php",
      x: "left-60",
      y: "bottom-36",
    },
    {
      //bottom-52 rotate-45 left-24
      src: "git",
      x: "left-24",
      y: "bottom-52",
      rotate: "rotate-45",
    },
  ];

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
        {logos.map((logo, index) => {
          return (
            <FloatingLogo
              src={logo.src}
              rotate={logo.rotate}
              x={logo.x}
              y={logo.y}
              timeout={(index + 1) * 300}
            />
          );
        })}
      </div>
    </div>
  );
}

interface FloatingLogoType {
  x: string;
  y: string;
  rotate?: string;
  src: string;
  timeout?: number;
}

function FloatingLogo({ x, y, rotate, src, timeout }: FloatingLogoType) {
  const [opacity, setOpacity] = useState("opacity-0");
  setTimeout(() => {
    setOpacity(() => "opacity-85");
  }, timeout);

  return (
    <img
      src={`3d/${src}.png`}
      className={` ${x} w-24 ${y} ${
        rotate ? rotate : ""
      } absolute ${opacity} transition duration-500 `}
    />
  );
}
