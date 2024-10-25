import { useState } from "react";
import { GithubIcon, LinkedinIcon, AvatarIcon } from "../assets/svgs";
import { ProfileLinkType, ProfileLinks } from "../components/ProfileLink";

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
      link: "/cv_alter.pdf",
      children: <AvatarIcon />,
      text: "CV (alternance)",
      colorHover: "hover:text-green-500",
    },
    {
      link: "/cv_job.pdf",
      children: <AvatarIcon />,
      text: "CV",
      colorHover: "hover:text-green-500",
    },
  ];

  const [logoShow, setlogoShow] = useState("-translate-x-10 opacity-0");
  const [descriptionShow, setDescriptionShow] = useState(
    "translate-y-10 opacity-0"
  );

  const profilLinkFunction = (tab: ProfileLinkType[]) => {
    return tab.map((item, index) => (
      <ProfileLinks
        text={item.text}
        link={item.link}
        colorHover={item.colorHover}
        timeout={(index + 1) * 300}
      >
        <span className="text-6xl">{item.children}</span>
      </ProfileLinks>
    ));
  };

  setTimeout(() => {
    setlogoShow(() => "translate-x-0");
  }, 100);

  setTimeout(() => {
    setDescriptionShow(() => "translate-y-0");
  }, 600);

  return (
    <div className="w-2/3 bg-purple-50 px-10 py-3 rounded-bl-[6rem] relative">
      <nav className="group inline-flex items-center space-x-3">
        <img src="logo1.svg" alt="logo" className="w-36" />
        <p
          className={`text-7xl font-bold ${logoShow} text-transparent transition duration-1000 bg-gradient-to-r from-slate-300 to-gray-600 bg-clip-text`}
        >
          ABOUDEBUG
        </p>
      </nav>
      <div className="mt-10 2xl:mt-20 2xl:space-y-10 space-y-7">
        <h1
          className={
            "2xl:text-7xl xl:text-6xl md:text-5xl font-bold text-gray-700 transition duration-1000 " +
            logoShow
          }
        >
          Aboubacar Mamane Ibrahim
        </h1>
        <h2
          className={
            "2xl:text-6xl xl:text-5xl md:text-4xl text-gray-600 font-bold transition duration-1000 " +
            logoShow
          }
        >
          Développeur Full-Stack
        </h2>
        <p
          className={
            "w-2/3 text-justify xl:text-lg text-base text-gray-700 font-semibold transition duration-1000 " +
            descriptionShow
          }
        >
          Il y a deux ans, après cinq ans en chimie, j'ai choisi de me
          réorienter vers le développement web et mobile, découvrant ainsi une
          nouvelle passion. J'ai depuis acquis des compétences solides et
          réalisé divers projets, développant une maîtrise complète du cycle de
          développement, de la conception à la mise en production, avec un souci
          constant du détail et de l'optimisation.
        </p>
      </div>
      <div className="2xl:mt-16 xl:mt-8 mx-10 px-7 2xl:py-5 py-3 rounded-3xl flex justify-around shadow-inner">
        {profilLinkFunction(buttons)}
      </div>
    </div>
  );
}
