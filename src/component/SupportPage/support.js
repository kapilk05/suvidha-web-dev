import Navbar from "../LandingPage/navbar/nav"
import SupportHeader from "./SupportHeader"
import SupportBody from "./SupportBody"
import SupportWork from "./SupportWork"
import Footer from "./Footer"

export default function About(){
    return(
        <>
        <div className="bg-fixed bg-cover bg-center ... bg-[url('./images/support-head.jpg')] w-full h-full"> 
        <Navbar/>
        <SupportHeader/>
        <SupportBody/>
        <SupportWork/>

        <div className="bg-gray-100 flex px-52 py-20">
            <h3 className="flex-2 font-bold text-2xl">Connect with us to empower woman and future generation</h3>
            <button className="flex-1 bg-red-500 py-4 rounded-full text-xl text-white font-bold mx-20" type="button">Contact</button>
        </div>
        <Footer/>
        </div>
        
        </>
    )
};
