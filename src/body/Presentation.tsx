import { RightHero } from "./RightHero";
import { LeftHero } from "./LeftHero";

export function Presentation() {
  return (
    <>
      <div className="min-h-screen flex">
        <LeftHero />
        <RightHero />
      </div>
    </>
  );
}
