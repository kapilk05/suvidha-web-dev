import {useState, useEffect} from "react";
import { Info } from "./constant/navtext"
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



export default function Nav(){

    const [navbar, setNavbar] = useState({
        menu: "hidden",
        icon: faBars,
        view: "hidden",
        width: window.outerWidth
    });
    const logo = window.outerWidth < 800 ? "/images/navbar-logo/suvidha_mobile_logo.png" : "/images/navbar-logo/suvidha_desktop_logo.png";
   
    function handleClick(){
        setNavbar(prev => {
            const newicon = prev.icon=== faBars? faXmark: faBars;
            const hidden = newicon===faBars? "hidden" : "";
            return {...prev, icon: newicon, menu: hidden}
        });
    }
    
    return(
        <>
        <div className={`flex fixed w-full justify-between text-black bg-white ${navbar.view}`}>
            <div>
               <Link to="/"><img className="w-96 h-20 ml-10" src={logo} alt="Suvidha-logo"/></Link>
            </div>
            <div className="flex">
            <div className="flex text-xl py-8 px-4 ">
            {Info.map((texts)=>(
               <Link to={texts.src} key={texts.id} className="px-4">{ texts.name } </Link>
            ))}
            </div>
            <div className="text-2xl">
                {/* <h1 className="pt-2 mt-2 mx-12"><button className="bg-yellow-500 px-10 py-4 rounded-lg text-white font-bold">Join Us</button></h1> */}
            </div>
            </div>
        </div>

        <div className={`fixed w-full justify-between text-black bg-white pb-2`}>
            <div className="flex">
               <Link to="/"><img className="w-20 h-20 ml-10" src={logo} alt="Suvidha-logo" onClick={handleClick}/></Link>
               <FontAwesomeIcon className="ml-auto p-10" onClick={handleClick} icon={navbar.icon} />
            </div>
            <div className={navbar.menu}>
            {Info.map((texts)=>(
               <Link to={texts.src} key={texts.id} className="p-5 ml-10 block">{ texts.name } </Link>
            ))}
            <div className="text-2xl ">
                <h1 className="pt-2 mt-2 mx-12"><button className="bg-yellow-500 px-10 py-4 rounded-lg text-white font-bold">Join Us</button></h1>
            </div>
            </div>
            </div>
        </>
    )
};
