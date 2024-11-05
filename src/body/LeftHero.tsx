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
        <span className="xl:text-6xl lg:text-4xl md:text-4xl text-3xl">
          {item.children}
        </span>
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
    <div className="md:w-2/3 w-full bg-purple-50 px-10 py-3 md:rounded-bl-[6rem] relative">
      <div className="md:block flex justify-center">
        <nav className="group inline-flex items-center space-x-3">
          <img src="logo1.svg" alt="logo" className="xl:w-36 lg:w-20 w-16" />
          <p
            className={`xl:text-7xl lg:text-5xl md:text-4xl text-3xl font-bold ${logoShow} text-transparent transition duration-1000 bg-gradient-to-r from-slate-300 to-gray-600 bg-clip-text`}
          >
            ABOUDEBUG
          </p>
        </nav>
      </div>
      <div className="md:block flex justify-center">
        <div className="mt-10 2xl:mt-20 2xl:space-y-10 space-y-7">
          <h1
            className={
              "2xl:text-7xl xl:text-6xl lg:text-5xl md:text-3xl text-4xl font-bold text-gray-700 transition duration-1000 " +
              logoShow
            }
          >
            Aboubacar Mamane Ibrahim
          </h1>
          <h2
            className={
              "2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl text-gray-600 font-bold transition duration-1000 " +
              logoShow
            }
          >
            Développeur Full-Stack
          </h2>
          <p
            className={
              "lg:w-3/4 md:w-5/6 w-full text-justify xl:text-lg md:text-sm text-base text-gray-700 font-semibold transition duration-1000 " +
              descriptionShow
            }
          >
            Il y a deux ans, après cinq ans en chimie, j'ai choisi de me
            réorienter vers le développement web et mobile, découvrant ainsi une
            nouvelle passion. J'ai depuis acquis des compétences solides et
            réalisé divers projets, développant une maîtrise complète du cycle
            de développement, de la conception à la mise en production, avec un
            souci constant du détail et de l'optimisation.
          </p>
        </div>
      </div>
      <div className="md:block flex justify-center">
        <div className="2xl:mt-16 xl:mt-8 mt-6 md:mx-10 lg:px-7 2xl:py-5 py-3 rounded-3xl w-full flex justify-around shadow-inner lg:space-x-0 md:space-x-6">
          {profilLinkFunction(buttons)}
        </div>
      </div>
    </div>
  );
}
