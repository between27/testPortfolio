interface ProfileLinkType {
  link: string;
  logo: string;
  text: string;
}

export const Contacts = () => {
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

  const un = buttons[0];

  return (
    <div className="text-white my-9 mx-10 p-7 bg-secondary/50 backdrop-blur-xl rounded-2xl flex justify-around">
      <ProfileLinks text={un.text} logo={un.logo} link={un.link} />
      <ProfileLinks text={un.text} logo={un.logo} link={un.link} />
      <ProfileLinks text={un.text} logo={un.logo} link={un.link} />
      <ProfileLinks text={un.text} logo={un.logo} link={un.link} />
    </div>
  );
};

export function ProfileLinks({ text, link, logo }: ProfileLinkType) {
  return (
    <>
      <a href={link} className="flex flex-col items-center">
        <img src={logo} alt={text} className="w-24" />
        <p>{text}</p>
      </a>
    </>
  );
}
