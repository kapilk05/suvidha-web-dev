import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="bg-black flex flex-wrap text-white py-24 px-10 xl:space-x-8 text-left xl:space-x-10">
        <div className="flex-1 w-full p-4 md:w-1/2 lg:w-2/5">
          <h3 className="py-4 w-56">
            <img
              src="./images/navbar-logo/suvidha_desktop_logo.png"
              alt="logo"
            />
          </h3>
          <h4>
            Suvidha Mahila Mandal is a non-profit organization working to impart
            education among the financially challenged sections to help them
            realize parity in education and strength of little minds in building
            a promising future.
          </h4>
        </div>
        <div className="w-full p-4 pt-10 md:w-1/2 lg:w-1/5">
          <h3 className="font-bold py-4 text-xl">Our Links</h3>
          <h2 className="text-gray-100">Home</h2>
          <h2>About</h2>
          <h2>News</h2>
          <h2>Support</h2>
          <h2>Gallery</h2>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/5">
          <h3 className="font-bold py-4 text-xl">Quick Links</h3>
          <h2>Code of Conduct</h2>
          <h2>Privacy Policy</h2>
        </div>
        <div className="space-x-5 w-full p-2 md:w-1/2 lg:w-1/5">
          <h3 className="font-bold py-4 text-xl">Follow Us</h3>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>
    </>
  );
}
