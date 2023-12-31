import {useEffect} from "react";
import {useState} from "react";

/* eslint-disable react/prop-types */
export function Header() {

    const listeDeLiens = ["About me", "Skills", "Projects"]
    return (
        <div className="relative">
        <div className="w-full flex justify-between items-center md:p-2 bg-darkBg/10 rounded-3xl mt-2">
            <Logo/>
            <div className="space-x-10 pr-5 hidden lg:inline-block">
                {listeDeLiens.map((lien) => (
                    <LienHeader key={lien} text={lien}/>
                ))}
            </div>
            <div className="pr-5 lg:hidden">
                <img src="/burger.svg" className="" alt="burger menu"/>
            </div>
        </div>
        </div>
    );
}

// #cab3d8
function Logo() {
    const [scale, setScale] = useState("scale-0")
    const [duration, setDuration] = useState("duration-0")
    useEffect(() => {
        setTimeout(() => {
            setDuration(() => 'duration-100')
            setScale(() => 'scale-125')
        }, 0);
        setTimeout(() => {
            setDuration(() => 'duration-100')
            setScale(() => 'scale-100')
        }, 200);
    }, []);
    return <div className="flex items-center justify-center space-x-5 group">
        <div>
            <img src="/logo1.svg"
                 className={`md:w-24 w-20 p-3 group-hover:scale-105 transition ${duration} ${scale} ease-in-out `} alt="Here's my logo"/>
        </div>
        <p className="text-2xl uppercase font-black text-purple-800 hidden md:block">Aboudebug</p>
    </div>
}

function LienHeader({text}) {
    return <a className="text-xl text-purple-900 hover:text-purple-300 hover:underline transition duration-300"
              href="#">{text}</a>
}

