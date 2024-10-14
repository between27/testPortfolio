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

export interface ResumeElementType {
  enterprise: string; // Université ou Entreprise de stage
  title: string; // Diplome ou titre du stage
  place: string; // Lieu de stage ou d'étude
  begin: string;
  end: string;
  tasks: string[];
}

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
];

export function Competences() {
  return (
    <div className="text-white px-10 py-4">
      <h1 className="text-7xl font-bold uppercase">Compétences</h1>
      <div className="flex space-x-10 mt-5 justify-center">
        {DATA.map((skills) => {
          return <SkillList title={skills.title} skills={skills.skills} />;
        })}
      </div>
    </div>
  );
}
