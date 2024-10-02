import { Button } from "../components/ui/button";

export function Presentation() {
  const buttons = [
    {
      link: "https://github.com/between27",
      logo: "/github.svg",
      text: "Github",
    },
    {
      link: "https://www.linkedin.com/in/aboubacar-mamane-ibrahim-b395a4262/",
      logo: "/linkedin.svg",
      text: "Linkedin",
    },
    {
      link: "https://twitter.com/aboudebug",
      logo: "/twitter.svg",
      text: "Twitter",
    },
    {
      link: "#",
      logo: "/avatar.svg",
      text: "CV",
    },
  ];
  return (
    <>
      <div className="text-center text-5xl font-bold">
        <h1>Développeur Concepteur d'applications</h1>
        <Button>ZED</Button>
      </div>
    </>
  );
}

function LinkCard({ logo, link }: any) {
  return (
    <a
      href={link}
      className="md:text-base text-sm  text-purple-100 flex items-center justify-between mt-2"
    >
      <img src={logo} className="mr-2" />
    </a>
  );
}
