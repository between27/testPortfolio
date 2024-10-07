import { useEffect, useState } from "react";
import { ProfileLinks, ProfileLinkType } from "../components/ProfileLink";
import { GithubIcon, XIcon, LinkedinIcon, AvatarIcon } from "../assets/svgs";

export function Presentation() {
  return (
    <>
      <div className="min-h-screen flex">
        <LeftHero />
        <RightHero />
      </div>
    </>
  );
}

export function LeftHero() {
  const buttons: ProfileLinkType[] = [
    {
      link: "https://github.com/between27",
      children: <GithubIcon />,
      text: "Github",
      colorHover: "hover:text-black",
    },
    {
      link: "https://www.linkedin.com/in/aboubacar-mamane-ibrahim-b395a4262/",
      children: <LinkedinIcon />,
      text: "Linkedin",
      colorHover: "hover:text-blue-500",
    },
    {
      link: "https://twitter.com/aboudebug",
      children: <XIcon />,
      text: "Twitter",
      colorHover: "hover:text-black",
    },
    {
      link: "#",
      children: <AvatarIcon />,
      text: "CV",
      colorHover: "hover:text-green-500",
    },
  ];

  const [logoShow, setlogoShow] = useState("-translate-x-10 opacity-0");
  const [descriptionShow, setDescriptionShow] = useState(
    "translate-y-10 opacity-0"
  );
  useEffect(() => {
    setTimeout(() => {
      setlogoShow(() => "translate-x-0");
    }, 100);
  });

  useEffect(() => {
    setTimeout(() => {
      setDescriptionShow(() => "translate-y-0");
    }, 600);
  });

  return (
    <div className="w-2/3 bg-purple-50 px-10 py-3 rounded-bl-3xl relative">
      <nav className="group inline-flex items-center space-x-3">
        <img src="logo1.svg" alt="logo" className="w-36" />
        <p
          className={`text-7xl font-bold ${logoShow} text-transparent transition duration-1000 bg-gradient-to-r from-slate-300 to-gray-600 bg-clip-text`}
        >
          ABOUDEBUG
        </p>
      </nav>
      <div className="mt-20 space-y-10">
        <h1
          className={
            "lg:text-7xl font-bold text-gray-700 transition duration-1000 " +
            logoShow
          }
        >
          Aboubacar Mamane Ibrahim
        </h1>
        <h2
          className={
            "lg:text-6xl text-gray-600 font-bold transition duration-1000 " +
            logoShow
          }
        >
          Développeur Full-Stack
        </h2>
        <p
          className={
            "w-2/3 text-justify text-lg text-gray-700 font-semibold transition duration-1000 " +
            descriptionShow
          }
        >
          Il y a deux ans, après cinq ans en chimie marqués par un burnout, j'ai
          choisi de me réorienter vers le développement web et mobile,
          découvrant ainsi une nouvelle passion. J'ai depuis acquis des
          compétences solides et réalisé divers projets, développant une
          maîtrise complète du cycle de développement, de la conception à la
          mise en production, avec un souci constant du détail et de
          l'optimisation.
        </p>
      </div>
      <div className="mt-16 mx-10 bg-slate-100 px-7 py-16 rounded-3xl flex justify-around shadow-inner">
        {buttons.map((item) => (
          <ProfileLinks
            text={item.text}
            link={item.link}
            colorHover={item.colorHover}
          >
            <span className="text-6xl">{item.children}</span>
          </ProfileLinks>
        ))}
      </div>
    </div>
  );
}

export function RightHero() {
  return (
    <div className="flex flex-col w-1/3 bg-back px-5 pt-5 rounded-br-3xl">
      <nav className="mx-2 flex justify-center space-x-7 text-xl">
        <p>Présentation</p>
        <p>Compétences</p>
        <p>Expériences</p>
      </nav>
      <div className="flex items-center justify-center h-full">
        <div className=" flex w-80 h-80 p-4 m-4 rounded-full bg-secondary">
          <img
            src="photo.jpg"
            alt="image"
            className="rounded-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
