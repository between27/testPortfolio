import React, { useState } from "react";

export interface ProfileLinkType {
  link: string;
  text: string;
  children: React.ReactNode;
  colorHover: string;
  timeout?: number;
}

export function ProfileLinks({
  text,
  link,
  children,
  colorHover,
  timeout,
}: ProfileLinkType) {
  const [opacity, setOpacity] = useState("opacity-0");
  setTimeout(() => {
    setOpacity("opacity-100");
  }, timeout);
  return (
    <>
      <a
        href={link}
        className={
          "text-slate-600 flex flex-col items-center space-y-3 scale-90 hover:scale-100 transition duration-200 drop-shadow-2xl " +
          colorHover +
          " " +
          opacity
        }
        target="_blank"
      >
        {children}
        <p className="xl:text-2xl lg:text-lg text-xs">{text}</p>
      </a>
    </>
  );
}
