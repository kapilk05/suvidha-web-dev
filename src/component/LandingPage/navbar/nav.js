import { Info } from "./constant/navtext"



export default function Nav(){

    
    return(
        <>
        <div className="flex justify-between text-white ">
            <div className="py-8 px-4 text-4xl Font">
               <h1>Suvidha Foundation</h1>
            </div>
            <div className="flex">
            <div className="flex  py-8 px-4 ">
            {Info.map((texts)=>(
               <h1 className="px-4">{ texts.name } </h1>
            ))}
            </div>
            <div className=" text-2xl ">
                <h1 className="mt-4 mx-12"><button className="bg-red-400 px-8 py-2 rounded-full font-bold">Donation</button></h1>
            </div>
            </div>
        </div>
        </>
    )
};
