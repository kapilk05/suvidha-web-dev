import Header from "./LandingPage/header/header";
import Nav from "./LandingPage/navbar/nav";
import Body from "./LandingPage/body/body";
import Footer from "./LandingPage/footer/footer";

export default function Pages(){
    return(
        <>
        <div className=" bg-fixed bg-cover bg-center ... bg-[url('/images/poorchildren.jpg')] w-full h-full"> 
        <Nav/>
        <Header/>
        <Body/>
        <Footer/>
        

        </div>
        
        </>
    )
};