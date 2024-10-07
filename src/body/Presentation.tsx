import { useEffect, useState } from "react";
import { ProfileLinks, ProfileLinkType } from "../components/ProfileLink";
import { Github, X, LinkedinBox, UserAvatarOutline } from "../assets/svgs";

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
      children: <Github />,
      text: "Github",
      colorHover: "hover:text-black",
    },
    {
      link: "https://www.linkedin.com/in/aboubacar-mamane-ibrahim-b395a4262/",
      children: <LinkedinBox />,
      text: "Linkedin",
      colorHover: "hover:text-blue-500",
    },
    {
      link: "https://twitter.com/aboudebug",
      children: <X />,
      text: "Twitter",
      colorHover: "hover:text-black",
    },
    {
      link: "#",
      children: <UserAvatarOutline />,
      text: "CV",
      colorHover: "hover:text-green-500",
    },
  ];

  const [logoShow, setlogoShow] = useState("-translate-x-10 opacity-0");
  useEffect(() => {
    setTimeout(() => {
      setlogoShow(() => "translate-x-0");
    }, 100);
  });

  return (
    <div className="w-2/3 bg-purple-50 px-10 py-3 rounded-bl-3xl">
      <nav className="group inline-flex items-center space-x-3">
        <img src="logo1.svg" alt="logo" className="w-36" />
        <p
          className={`text-7xl font-bold ${logoShow} transition duration-1000 text-primary`}
        >
          ABOUDEBUG
        </p>
      </nav>
      <div className="my-20 space-y-10">
        <h1 className="lg:text-7xl font-bold text-primary">
          Aboubacar Mamane Ibrahim
        </h1>
        <h2 className="lg:text-6xl text-secondary font-bold">
          Développeur Full-Stack{" "}
          <span className="text-sm">
            (A la recherche de nouvelles opportunités)
          </span>
        </h2>
      </div>
      <div className="text-white mt-32 mx-10 px-7 py-16 bg-primary/50 backdrop-blur-xl rounded-2xl flex justify-around">
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
          <img src="photo.jpg" alt="image" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
