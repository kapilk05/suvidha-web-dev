import {info} from "./data/ChallengesData";
export default function Challenges(){
    return (
        <div className="px-10">
            {info.map(element =>
                <div className="flex py-14">
                <img className="flex-1 w-2" src={element.src}/>
                <div className="flex-1 w-1/2 p-10 px-32">
                    <h2 className="text-xl font-bold text-left py-2">{element.title}</h2>
                    <p className="text-left py-2">{element.part1}</p>
                    <p className="text-left py-2">{element.part2}</p>
                </div>
            </div>)}
        </div>
    )
}