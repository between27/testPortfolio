import { ResumeElementType, XpCard } from "../components/XpCard";

const experiences: ResumeElementType[] = [
  {
    title: "Stagiaire Développeur mobile",
    enterprise: "Zenpark",
    imageUrl: "zenpark.png",
    place: "Rennes, France",
    begin: "Février 2024",
    end: "Juin 2024",
    tasks: [
      "Automatiser les tests d'intégration pour une appli mobile avec Detox.",
      "Ajouter de nouvelles fonctionnalités pour répondre aux besoins des utilisateurs",
      "Assurer le déploiement continu des mises à jour stables.",
    ],
  },
  {
    title: "Stagiaire Dévéloppeur Web E-Commerce engineer",
    enterprise: "Garbocom",
    imageUrl: "garbocom_logo.jpg",
    place: "Metz, France",
    begin: "Juin 2023",
    end: "Août 2023",
    tasks: [
      "Mise en place de sites de réservation de chambres d'hotel avec le plugin Motopress",
      "Adaption responsive sur plusieurs plateforme",
    ],
  },
];
const formations: ResumeElementType[] = [
  {
    title: "Concepteur Développeur d'Applications",
    enterprise: "3W Academy",
    imageUrl: "3w.png",
    place: "Metz, France",
    begin: "Octobre 2024",
    end: "Novembre 2025",
  },
  {
    title: "BUT Informatique | Réalisation d'applications",
    enterprise: "IUT de Metz",
    imageUrl: "iut.png",
    place: "Metz, France",
    begin: "Septembre 2023",
    end: "Juin 2024",
  },
  {
    title: "DUT Informatique | Réalisation d'applications",
    enterprise: "IUT de Metz",
    imageUrl: "iut.png",
    place: "Metz, France",
    begin: "Septembre 2022",
    end: "Août 2023",
  },
];

export function Formation() {
  return (
    <div className="">
      <ExperienceComponent
        title="Expériences"
        experiences={experiences}
        rounded="rounded-t-[6rem] pt-10"
      />
      <ExperienceComponent
        title="Formations"
        experiences={formations}
        rounded="rounded-b-[6rem] py-10"
      />
    </div>
  );
}

export interface ExperienceComponentType {
  title: string;
  experiences: ResumeElementType[];
  rounded?: string;
}

function ExperienceComponent({
  experiences,
  title,
  rounded,
}: ExperienceComponentType) {
  return (
    <div className={" bg-purple-50 px-24 " + rounded}>
      <h1 className=" mt-7 text-5xl font-bold uppercase bg-gradient-to-r text-transparent from-slate-500 to-gray-800 bg-clip-text">
        {title}
      </h1>
      <div className="py-3 space-y-6">
        {experiences.map((experience) => {
          return (
            <XpCard
              title={experience.title}
              place={experience.place}
              enterprise={experience.enterprise}
              begin={experience.begin}
              end={experience.end}
              imageUrl={experience.imageUrl}
              tasks={experience.tasks}
            />
          );
        })}
      </div>
    </div>
  );
}
