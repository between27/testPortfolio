/* eslint-disable react/prop-types */



export function Presentation() {
const buttons = [
 {
        link: 'https://github.com/between27',
        logo: "/github.svg",
        text: 'Github'
},
  {
        link: 'https://www.linkedin.com/in/aboubacar-mamane-ibrahim-b395a4262/',
        logo: "/linkedin.svg",
        text: 'Linkedin'
},
   {
        link: 'https://twitter.com/BE2WIN27',
        logo: "/twitter.svg",
        text: 'Twitter'
},  {
    link: '#',
    logo: "/avatar.svg",
    text: 'CV'
}
]
    return <>
        <div className="py-10 flex justify-around ">
        {/* Left PART */}
        <div  className="">
        <h2 className="text-2xl bg-gradient-to-r text-transparent from-purple-100 to-purple-300 bg-clip-text">Hello My name is...</h2>
        <h1  className="text-8xl text-transparent bg-gradient-to-br from-purple-100 to-primary bg-clip-text font-black">Aboubacar</h1>
        <h1 className="text-8xl text-transparent bg-gradient-to-br from-purple-100 to-primary bg-clip-text uppercase font-black">Mamane Ibrahim</h1>
        <h3 className="text-xl text-purple-100">Student in Computer Science at the IUT of Metz</h3>
        </div>
        {/* right PART */}
        <div>
        <img className="rounded-full w-72 border-2 border-purple-100" src="/photo.jpg" />
        </div>
        </div>
        <div className="">
            <h1 className="text-center text-3xl font-black text-purple-100 p-2 mb-4">My contacts</h1>
            <div className='flex justify-center space-x-5'>
            {buttons.map((elem)=> <LinkCard logo={elem.logo} link={elem.link} key={elem.text} text={elem.text} />)}
                </div>
        </div>
    </>
}

function LinkCard({logo, link, text}) {
return <a href={link} className='p-3 bg-primary flex space-x-2 w-fit rounded-full text-purple-100'>
    <img src={logo} />
    <p>{text}</p>
</a>
}