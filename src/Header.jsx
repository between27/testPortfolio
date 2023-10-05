/* eslint-disable react/prop-types */
export function Header() {
  return (
    <div className="flex justify-between items-center p-3 border border-l-emerald-900">
      <Logo />
      <div className="space-x-5">
        <a href="#">About me</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <LienHeader text="YES" />
      </div>
      
    </div>
  );
}

function Logo() {

  return <div className="w-40 border border-red-900">
  <img src="https://i.imgur.com/dyPdz5n.png" title="source: imgur.com" />
  </div>
}

function LienHeader({text}) {
  return <a className="text-xl text-gray-700 hover:text-red-600 " href="#">{text}</a>
}

