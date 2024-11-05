import {
  AdonisJsIcon,
  CypressIcon,
  DartIcon,
  ExpoIcon,
  FlutterIcon,
  JavaIcon,
  JestIcon,
  MysqlIcon,
  PhpIcon,
  PostgresqlIcon,
  PostmanIcon,
  ReactIcon,
  SymfonyIcon,
  TailwindIcon,
  TypescriptIcon,
  ViteIcon,
} from "../assets/svgs";
import { SkillList, SkillListType } from "../components/SkillList";

const DATA: SkillListType[] = [
  {
    title: "Langages",
    skills: [
      {
        name: "TypeScript",
        icon: <TypescriptIcon />,
      },
      {
        name: "Dart",
        icon: <DartIcon />,
      },
      {
        name: "PHP",
        icon: <PhpIcon />,
      },
      {
        name: "Java",
        icon: <JavaIcon />,
      },
    ],
  },
  {
    title: "Web FrameWork",
    skills: [
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Symfony",
        icon: <SymfonyIcon />,
      },
      {
        name: "AdonisJs",
        icon: <AdonisJsIcon />,
      },
      {
        name: "Tailwind",
        icon: <TailwindIcon />,
      },
    ],
  },
  {
    title: "Mobile Framework",
    skills: [
      {
        name: "Expo",
        icon: <ExpoIcon />,
      },
      {
        name: "Flutter",
        icon: <FlutterIcon />,
      },
    ],
  },
  {
    title: "Base de Données",
    skills: [
      {
        name: "MySQL",
        icon: <MysqlIcon />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgresqlIcon />,
      },
    ],
  },
  {
    title: "Outils",
    skills: [
      {
        name: "Vite Js",
        icon: <ViteIcon />,
      },
      {
        name: "Jest",
        icon: <JestIcon />,
      },
      {
        name: "Detox",
      },
      {
        name: "Cypress",
        icon: <CypressIcon />,
      },
      {
        name: "Postman",
        icon: <PostmanIcon />,
      },
    ],
  },
  {
    title: "Programmation",
    skills: [
      {
        name: "TDD",
      },
      {
        name: "Tests d'intégrations",
      },
      {
        name: "Git flow",
      },
      {
        name: "ELK",
      },
    ],
  },
  {
    title: "Projets",
    skills: [
      {
        name: "Kanban",
      },
      {
        name: "Méthode Agile",
      },
      {
        name: "Scrum",
      },
    ],
  },
  {
    title: "Communication",
    skills: [
      {
        name: "Français (Natif)",
      },
      {
        name: "Anglais (B1)",
      },
    ],
  },
];

export function Competences() {
  return (
    <div className="text-white md:px-24 mx-10 py-4 my-8">
      <h1 className="lg:text-5xl text-3xl font-bold uppercase bg-gradient-to-r from-teal-100 to-slate-100 text-transparent bg-clip-text">
        Compétences
      </h1>
      <section className=" flex justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-20 gap-y-8 mt-5 justify-center">
          {DATA.map((skills) => {
            return <SkillList title={skills.title} skills={skills.skills} />;
          })}
        </div>
      </section>
    </div>
  );
}
