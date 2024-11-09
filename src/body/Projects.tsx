import ProjectCard, { ProjectCardInterface } from "../components/ProjectCard";

const landingPages: ProjectCardInterface[] = [
  {
    technos: ["React", "ViteJs", "Tailwind"],
    title: "Landing 1",
    description: "Landing Page faite à partir d'une maquette vue sur twitter",
    link: "https://landing1.aboudebug.com",
    github: "https://github.com/between27/amena-webpage",
    uri: "landing1",
  },
  {
    technos: ["React", "ViteJs", "Tailwind"],
    description: "Landing Page faite à partir d'une maquette vue sur twitter",
    title: "Landing 2",
    link: "https://landing2.aboudebug.com",
    github: "https://github.com/between27/amena-webpage1",
    uri: "landing2",
  },
  {
    technos: ["React", "ViteJs", "Tailwind"],
    description: "Landing Page faite à partir d'une maquette vue sur twitter",
    title: "Landing 3",
    link: "https://landing3.aboudebug.com",
    github: "https://github.com/between27/amena-webpage3",
    uri: "landing3",
  },
];

const applications: ProjectCardInterface[] = [
  {
    technos: [
      "Expo",
      "AdonisJs",
      "PostgreSQL",
      "Coolify",
      "NativeWind",
      "Typescript",
    ],
    description: "Application visant à rendre les taches ménagères fun",
    title: "Tasks & Treats",
  },
];

export default function Projects() {
  return (
    <div className="text-white md:px-24 mx-10 py-4 my-8 ">
      <h1 className="lg:text-5xl text-3xl font-bold uppercase bg-gradient-to-r from-teal-100 to-slate-100 text-transparent bg-clip-text">
        Projets
      </h1>
      <h2 className="lg:text-4xl text-2xl py-3 ml-4 font-bold uppercase bg-gradient-to-r from-teal-100 to-slate-100 text-transparent bg-clip-text">
        Applications
      </h2>
      <div className="grid grid-cols-3 place-items-center">
        {applications.map((card) => {
          return (
            <ProjectCard
              technos={card.technos}
              description={card.description}
              title={card.title}
              link={card.link}
              github={card.github}
              uri={card.uri}
            />
          );
        })}
      </div>
      <h2 className="lg:text-4xl text-2xl py-3 ml-4 font-bold uppercase bg-gradient-to-r from-teal-100 to-slate-100 text-transparent bg-clip-text">
        Landing Pages
      </h2>
      <div className="grid grid-cols-3 place-items-center">
        {landingPages.map((card) => {
          return (
            <ProjectCard
              technos={card.technos}
              description={card.description}
              title={card.title}
              link={card.link}
              github={card.github}
              uri={card.uri}
            />
          );
        })}
      </div>
    </div>
  );
}
