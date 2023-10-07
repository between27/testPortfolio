/* eslint-disable react/prop-types */
export function Header() {
  return (
    <div className="flex justify-between items-center p-3 border-b-2 border-l-emerald-900">
      <Logo />
      <div className="space-x-5">
        <LienHeader text="About me" />
        <LienHeader text="Skills" />
        <LienHeader text="Projetcs" />
      </div>
      
    </div>
  );
}

function Logo() {

  return <div className="w-40">
  <img src="https://i.imgur.com/dyPdz5n.png" title="source: imgur.com" />
  </div>
}

function LienHeader({text}) {
  return <a className="text-xl text-gray-700 hover:text-red-600 " href="#">{text}</a>
}

