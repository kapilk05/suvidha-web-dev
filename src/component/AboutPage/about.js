import Navbar from "../LandingPage/navbar/nav";
import AboutHeader from "./AboutHeader";
import AboutBody from "./AboutBody";
import Footer from "./Footer";
import AboutWork from "./AboutWork";
import AboutVision from "./AboutVision";

export default function About() {
  return (
    <>
      <div className="w-full bg-fixed bg-cover ... bg-[url('./images/About/BackImg.jpg')] h-full">
        <Navbar />
        <AboutHeader />
        <AboutBody />
        <AboutWork />
        <AboutVision />

        <div className="bg-white flex flex-wrap space-y-10 p-20  xl:px-52 xl:space-y-0">
          <h3 className="flex-2 font-bold text-3xl">
            Connect with us to empower woman and future of nation
          </h3>
          <button
            className="flex-1 bg-red-500 px-8 py-4 rounded-full text-base text-white font-bold xl:mx-10"
            type="button"
          >
            Contact
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
