import { useEffect } from "react";
import { useState } from "react";

export function Header() {
  return (
    <div className="w-full flex justify-center items-center bg-black rounded-full mt-2 space-x-32 text-gray-100 py-5">
      <LienHeader text={"Présentation"} />
      <LienHeader text={"Compétences"} />
      <Logo />
      <LienHeader text={"Expériences"} />
      <LienHeader text={"Formation"} />
    </div>
  );
}

// #cab3d8
function Logo() {
  const [scale, setScale] = useState("-scale-0");
  const [duration, setDuration] = useState("duration-0");
  useEffect(() => {
    setTimeout(() => {
      setDuration(() => "duration-100");
      setScale(() => "scale-125");
    }, 0);
    setTimeout(() => {
      setDuration(() => "duration-100");
      setScale(() => "scale-100");
    }, 200);
  }, []);
  return (
    <div className="flex items-center justify-center space-x-5 group">
      <div>
        <img
          src="/logo1.svg"
          className={`w-16 p-3 group-hover:scale-105 transition ${duration} ${scale} ease-in-out border-4 rounded-full p-0`}
          alt="Here's my logo"
        />
      </div>
      <p className="text-2xl uppercase font-black text-white hidden md:block">
        Aboudebug
      </p>
    </div>
  );
}

interface LienHeaderType {
  text: string;
}

function LienHeader({ text }: LienHeaderType) {
  return (
    <div className="flex flex-col group">
      <p>{text}</p>
      <p className="h-0.5 scale-x-0 bg-white group-hover:scale-x-50 transition duration-200"></p>
    </div>
  );
}
