import Navbar from "../LandingPage/navbar/nav"
import AboutHeader from "./AboutHeader"
import AboutBody from "./AboutBody"
import Footer from "./Footer"
import AboutWork from "./AboutWork"
import AboutVision from "./AboutVision"

export default function About(){
    return(
        <>
        <div className=" bg-fixed bg-cover bg-center ... bg-[url('./images/about-head.jpg')] w-full h-full"> 
        <Navbar/>
        <AboutHeader/>
        <AboutBody/>
        <AboutWork/>
        <AboutVision/>

        <div class="numbers"></div>

        <div class="motive"></div>

        <div class="newsletter"></div>

        <div className="bg-white flex py-20 px-52">
            <h3 className="flex-2 font-bold text-3xl">Connect with us to empower woman and future of nation</h3>
            <button className="flex-1 bg-red-500 px-8 py-4 rounded-full text-base text-white font-bold mx-10" type="button">Contact</button>
        </div>
        <Footer/>
        </div>
        
        </>
    )
};
