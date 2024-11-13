import { GithubIcon, WorldIcon } from "../assets/svgs";

export interface ProjectCardInterface {
  technos?: string[];
  link?: string;
  github?: string;
  description: string;
  uri?: string;
  title: string;
}

export default function ProjectCard({
  technos,
  link: lien,
  description,
  github,
  uri,
  title,
}: ProjectCardInterface) {
  return (
    <div className=" text-gray-50 xl:w-80 lg:w-60 rounded-xl md:hover:shadow-2xl  md:hover:shadow-gray-700 transition duration-300 md:hover:scale-105">
      <div className="p-2 bg-back rounded-t-xl">
        <img
          src={`projects/${uri ? uri : "cs"}.jpg`}
          alt=""
          className=" w-full xl:object-top object-cover xl:h-56 xl:max-h-56 h-44 max-h-44 rounded-t-xl"
        />
      </div>
      <div className="px-3 pb-3  rounded-b-xl xl:h-72 h-60 flex flex-col justify-between border border-white bg-gray-950">
        <article>
          <h1 className=" font-bold text-2xl mb-3">{title}</h1>
          <p className=" text-justify">{description}</p>
        </article>
        <article>
          {technos && (
            <div className="flex mx-1 my-2 space-x-1 flex-wrap space-y-1">
              {technos.map((str) => {
                return <Badge str={str} />;
              })}
            </div>
          )}
          <div className="space-x-1">
            {lien && <Badge str={BagdgeEnum.WEBSITE} link={lien} />}
            {github && <Badge str={BagdgeEnum.GITHUB} link={github} />}
          </div>
        </article>
      </div>
    </div>
  );
}

export interface Badge {
  str: string;
  link?: string;
}
enum BagdgeEnum {
  WEBSITE = "Lien",
  GITHUB = "Github",
}

export function Badge({ str, link }: Badge) {
  return link ? (
    <div className=" inline-flex bg-white text-gray-950 px-2 py-1 md:text-sm text-xs rounded-lg items-center space-x-1 hover:bg-gray-700">
      <span>
        {str === BagdgeEnum.WEBSITE ? (
          <WorldIcon />
        ) : str === BagdgeEnum.GITHUB ? (
          <GithubIcon />
        ) : (
          ""
        )}
      </span>
      <a href={link} className="">
        {str}
      </a>
    </div>
  ) : (
    <p className="bg-gray-600 text-white px-2 py-1 md:text-sm text-xs rounded-lg flex items-center hover:bg-gray-700 justify-center cursor-default">
      {str}
    </p>
  );
}
