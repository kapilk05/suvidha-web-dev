import Challenges from "./Challenges"

export default function SupportWork(){
    return (<>
        <div className="bg-white p-20 text-center">
        <p className="font-semibold text-2xl pb-2">Services</p>
        <p className="font-bold text-3xl pb-4">Challenges we are working on.</p>
        <Challenges/>
        </div>
    </>);
}