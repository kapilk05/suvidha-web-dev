import Navbar from "../LandingPage/navbar/nav"
import AboutHeader from "./AboutHeader"
import AboutBody from "./AboutBody"
import Footer from "./Footer"

export default function About(){
    return(
        <>
        <div className=" bg-fixed bg-cover bg-center ... bg-[url('./images/about-head.jpg')] w-full h-full"> 
        <Navbar/>
        <AboutHeader/>
        <AboutBody/>

        <div class="numbers"></div>

        <div class="motive"></div>

        <div class="newsletter"></div>

        <div className="bg-white flex p-10 px-60">
            <h3 className="flex-2 font-bold text-3xl">Connect with us to impower woman and future of nation</h3>
            <button className="flex-1 bg-red-500 px-8 py-4 rounded-full text-base text-white font-bold mx-10" type="button">Contact</button>
        </div>
        <Footer/>
        </div>
        
        </>
    )
};
