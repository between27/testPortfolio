/* eslint-disable react/prop-types */
export function Header() {

const listeDeLiens = ["About me", "Skills", "Projects"]
  return (
      <div className="w-full flex justify-between items-center p-2 bg-header rounded-lg mt-2">
      <Logo />
      <div className="space-x-10 pr-5">
        {listeDeLiens.map((lien) => (
          <LienHeader key={lien} text={lien} />
        ))}
      </div>
      </div>
  );
}
// #cab3d8
function Logo() {

  return <div className="flex items-center justify-center space-x-5 group">
    <div>
    <img src="/logo.svg" className="w-24 group-hover:scale-105 transition duration-300" />
    </div>
  <p className="text-2xl uppercase font-black text-purple-100">Aboudebug</p>
  </div>
}

function LienHeader({text}) {
  return <a className="text-xl text-purple-100 hover:text-purple-300 hover:underline transition duration-300" href="#">{text}</a>
}

