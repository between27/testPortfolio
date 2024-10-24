import { useEffect, useState } from "react";

export function RightHero() {
  const logos1: FloatingLogoType[] = [
    {
      rotate: "-rotate-45",
      src: "typescript",
    },
    {
      src: "react",
      translate: "2xl:-translate-y-12 -translate-y-6",
    },
    {
      src: "tailwind",
      rotate: "rotate-45",
    },
  ];
  const logos2: FloatingLogoType[] = [
    {
      src: "mysql",
      rotate: "-rotate-45",
    },
    {
      src: "php",
      translate: "2xl:translate-y-12 translate-y-6",
    },
    {
      //bottom-52 rotate-45 left-24
      src: "git",
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
      <div className="flex-col flex items-center justify-center h-full relative">
        <FloatingLogoList logoList={logos1} />
        <div
          className={
            " flex 2xl:w-96 2xl:h-96 w-80 h-80 p-4 m-4 rounded-full bg-secondary/30 transition duration-600 " +
            scaleCircle
          }
        >
          <img
            src="portfolioPic.png"
            alt="image"
            className={
              "absolute rounded-b-full scale-125 transition duration-500 drop-shadow-2xl " +
              top
            }
          />
        </div>
        <FloatingLogoList logoList={logos2} />
      </div>
    </div>
  );
}

interface FloatingLogoType {
  translate?: string;
  rotate?: string;
  src: string;
  timeout?: number;
}

function FloatingLogo({ translate, rotate, src, timeout }: FloatingLogoType) {
  const [opacity, setOpacity] = useState("opacity-0");
  setTimeout(() => {
    setOpacity(() => "opacity-85");
  }, timeout);

  return (
    <img
      src={`3d/${src}.png`}
      className={` ${translate} 2xl:w-24 w-20 ${
        rotate ? rotate : ""
      } ${opacity} transition duration-500 `}
    />
  );
}

interface FloatingLogoListType {
  logoList: FloatingLogoType[];
}

function FloatingLogoList({ logoList }: FloatingLogoListType) {
  return (
    <div className="flex 2xl:space-x-5 space-x-9 ">
      {logoList.map((logo, index) => {
        return (
          <FloatingLogo
            src={logo.src}
            rotate={logo.rotate}
            translate={logo.translate}
            timeout={(index + 1) * 300}
          />
        );
      })}
    </div>
  );
}
