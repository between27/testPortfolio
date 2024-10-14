import { IconDot } from "../assets/svgs";

export interface ResumeElementType {
  enterprise: string; // Université ou Entreprise de stage
  title: string; // Diplome ou titre du stage
  imageUrl: string;
  place: string; // Lieu de stage ou d'étude
  begin: string;
  end: string;
  tasks?: string[]; //Taches pour les stages
}

export function XpCard({
  title,
  enterprise,
  place,
  begin,
  end,
  tasks,
  imageUrl,
}: ResumeElementType) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src={imageUrl}
            className=" rounded-full w-14 h-14 object-cover"
          />
        </div>
        <div className="">
          <h1 className=" font-bold text-2xl">{title}</h1>
          <p className="text-lg font-semibold">
            {enterprise} | {place}
          </p>
          {tasks && (
            <ul>
              {tasks.map((task) => {
                return (
                  <li className="flex items-center space-y-1 ml-3">
                    <span>
                      <IconDot />
                    </span>
                    <span>{task}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <p className=" font-semibold">
        {begin} - {end}
      </p>
    </div>
  );
}
