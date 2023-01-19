import {work} from "./data/work"
export default function AboutWork(){
    
    return (
        <>
        <div className="bg-purple-50 h-auto p-20 xl:p-52">
        <h1 className="text-5xl text-center text-blue-700 pb-10">Areas of Work</h1>
        <div className="flex flex-wrap space-y-10 xl:grid xl:grid-cols-4 xl:gap-8 xl:p-10 xl:space-y-0">
        {work.map( element => (
            <div key={element.id} className="w-full xl:w-auto h-auto border-2 border-gray-500 rounded-lg pt-4">
            <img className="w-24 m-auto" src={element.src}/>
            <h3 className="text-center text-xl text-blue-700 font-bold p-10">{element.title}</h3>
            </div>)
        )}
        </div>
        </div>
        </>

    );

}

// 