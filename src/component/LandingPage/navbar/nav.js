import { Info } from "./constant/navtext"
import {Link } from "react-router-dom";



export default function Nav(){

    
    return(
        <>
        <div className="flex justify-between text-white bg-transparent">
            <div className="py-8 px-8 text-4xl Font">
               <Link to="/">Suvidha Foundation</Link>
            </div>
            <div className="flex">
            <div className="flex text-lg py-8 px-4 ">
            {Info.map((texts)=>(
               <Link to={texts.src} className="px-4">{ texts.name } </Link>
            ))}
            </div>
            <div className=" text-2xl ">
                <h1 className="pt-2 mt-4 mx-12"><button className="bg-red-400 px-8 py-2 rounded-full font-bold">Donation</button></h1>
            </div>
            </div>
        </div>
        </>
    )
};
