import { IconDot } from "../assets/svgs";

export interface SkillIconType {
  icon?: React.ReactNode;
  name: string;
}

export function SkillIcon({ icon, name }: SkillIconType) {
  return (
    <li className="flex items-center font-semibold lg:text-xl text-sm space-x-2 ml-2">
      <span className="">{icon ? icon : <IconDot />}</span>
      <p className="tracking-wide">{name}</p>
    </li>
  );
}
