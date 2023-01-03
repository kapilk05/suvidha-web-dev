import { Info } from "./constant/navtext"
import { Outlet, Link } from "react-router-dom";
import Logo from "../../../images/suvidha_desktop_logo.png" 


export default function Nav(){

    
    return(
        <>
        <div className="flex justify-between bg-black text-white opacity-70">
            <div className="py-8 px-4 text-4xl">
            <Link to="/"><h1>Suvidha foundation</h1></Link>
               {/* <Link to="/"><img src={Logo}/></Link> */}
            </div>
            <div className="flex text-xl py-8 px-4 ">
            {Info.map((texts)=>(
               <Link to={texts.src} className="px-4">{ texts.name }</Link>
            ))}
            <Outlet/>
            </div>
            <div className=" text-2xl bg-red-600">
                <h1 className="mt-8 mx-12">Donation</h1>
            </div>

            
        </div>
        </>
    )
};
