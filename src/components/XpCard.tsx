import { IconDot } from "../assets/svgs";

export interface ResumeElementType {
  enterprise: string; // Université ou Entreprise de stage
  title: string; // Diplome ou titre du stage
  imageUrl: string;
  place: string; // Lieu de stage ou d'étude
  begin: string;
  end: string;
  technos?: Array<string>;
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
  technos,
}: ResumeElementType) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src={imageUrl}
            className=" rounded-full lg:w-14 lg:h-14 w-12 h-12 object-cover"
          />
        </div>
        <div className="">
          <h1 className=" font-bold lg:text-2xl text-lg">{title}</h1>
          <p className="text-sm font-semibold md:hidden block">
            {begin} - {end}
          </p>
          {technos && (
            <div className="flex m-1 space-x-1">
              {technos.map((str) => {
                return (
                  <p className="bg-black text-white px-2 text-xs rounded-lg flex items-center justify-center">
                    {str}
                  </p>
                );
              })}
            </div>
          )}

          <p className="md:text-lg text-sm font-semibold">
            {enterprise} | {place}
          </p>
          {tasks && (
            <ul>
              {tasks.map((task) => {
                return (
                  <li className="flex items-center text-sm space-y-1 ml-3">
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
      <p className="text-sm font-semibold hidden md:block">
        {begin} - {end}
      </p>
    </div>
  );
}
