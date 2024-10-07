import React from "react";

export interface ProfileLinkType {
  link: string;
  text: string;
  children: React.ReactNode;
  colorHover: string;
}

export function ProfileLinks({
  text,
  link,
  children,
  colorHover,
}: ProfileLinkType) {
  return (
    <>
      <a
        href={link}
        className={
          "flex flex-col items-center space-y-3 hover:scale-125 transition duration-300 " +
          colorHover
        }
      >
        {children}
        <p className="text-2xl">{text}</p>
      </a>
    </>
  );
}
