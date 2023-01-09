import {work} from "./data/work"
export default function AboutWork(){
    
    return (
        <>
        <div className="bg-purple-50 h-auto p-52">
        <h1 className="text-5xl text-center text-blue-700">Areas of Work</h1>
        <div className="grid grid-cols-4 gap-8 p-10">
        {work.map( element => (
            <div className="w-auto h-auto border-2 border-gray-500 rounded-lg pt-4">
            <img className="w-24 m-auto" src={element.src}/>
            <h3 className="text-center text-xl text-blue-700 font-bold p-10">{element.title}</h3>
            </div>)
        )}
        </div>
        </div>
        </>

    );

}