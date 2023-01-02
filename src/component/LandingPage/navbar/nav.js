import { Info } from "./constant/navtext"



export default function Nav(){

    
    return(
        <>
        <div className="flex justify-between bg-black text-white opacity-70">
            <div className="py-8 px-4 text-4xl">
               <h1>Suvidha Foundation</h1>
            </div>
            <div className="flex text-xl py-8 px-4 ">
            {Info.map((texts)=>(
               <h1 className="px-4">{ texts.name } </h1>
            ))}
            </div>
            <div className=" text-2xl bg-red-600">
                <h1 className="mt-8 mx-12">Donation</h1>
            </div>

            
        </div>
        </>
    )
};
