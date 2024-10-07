import { useEffect, useState } from "react";

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
  const [logoShow, setlogoShow] = useState("-translate-x-10 opacity-0");
  useEffect(() => {
    setTimeout(() => {
      setlogoShow(() => "translate-x-0");
    }, 100);
  });

  return (
    <div className="w-2/3 bg-purple-50 px-5 py-3 rounded-bl-3xl">
      <nav className="group inline-flex items-center space-x-3">
        <img src="logo1.svg" alt="logo" className="w-36" />
        <p
          className={`text-7xl font-bold ${logoShow} transition duration-1000 text-primary`}
        >
          ABOUDEBUG
        </p>
      </nav>
      <div className="mt-40 space-y-10">
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
