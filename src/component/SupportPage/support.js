import Navbar from "../LandingPage/navbar/nav"
import SupportHeader from "./SupportHeader"
import SupportBody from "./SupportBody"
import SupportWork from "./SupportWork"
import Footer from "../AboutPage/Footer"

export default function About(){
    return(
        <>
        <Navbar/>
        <div className="bg-fixed bg-cover bg-clip-content... bg-[url('./images/Support/backImg.png')] w-full h-full"> 
        <SupportHeader/>
        <SupportBody/>
        <SupportWork/>

        <div className="bg-white flex flex-wrap space-y-10 p-20  xl:px-52 xl:space-y-0">
            <h3 className="flex-2 font-bold text-2xl">Connect with us to empower woman and future generation</h3>
            <button className="flex-1 bg-red-500 px-8 py-4 rounded-full text-base text-white font-bold xl:mx-10" type="button">Contact</button>
        </div>
        <Footer/>
        </div>
        
        </>
    )
};
