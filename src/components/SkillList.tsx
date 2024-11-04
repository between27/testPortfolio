import { SkillIcon, SkillIconType } from "./SkillIcon";
export interface SkillListType {
  title: string;
  skills: SkillIconType[];
}
export function SkillList({ title, skills }: SkillListType) {
  return (
    <div className="">
      <h2 className="md:text-2xl text-sm font-bold mb-2">{title}</h2>
      <ul className=" space-y-1">
        {skills.map((skill) => {
          return <SkillIcon name={skill.name} icon={skill.icon} />;
        })}
      </ul>
    </div>
  );
}
