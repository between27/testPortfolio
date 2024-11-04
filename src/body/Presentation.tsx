import { RightHero } from "./RightHero";
import { LeftHero } from "./LeftHero";

export function Presentation() {
  return (
    <>
      <div className="md:min-h-screen md:flex block">
        <LeftHero />
        <RightHero />
      </div>
    </>
  );
}
