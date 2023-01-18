import Navbar from "../LandingPage/navbar/nav"
import "./contact.css";


export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="pt-52">
        <h1 style={{marginLeft:6 + "%"}}>Send a Message <i className="fa fa-telegram" style={{fontSize:36 + "px", color:"blue"}}></i></h1>

            <div className="container">
            <form method="post">
                <label htmlFor="fname">First Name</label><br/>
                <input type="text" id="fname" name="firstname" placeholder="Enter Your First Name" required/><br/>
                <label htmlFor="lname">Last Name</label><br/>
                <input type="text" id="lname" name="lastname" placeholder="Enter Your Last Name" required/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="text" id="email" name="email" placeholder="Enter Your Email" required/><br/>
                <label htmlFor="mob">Mobile Number</label><br/>
                <input type="text" id="mob" name="mob" placeholder="Enter Your Mobile Number" required/><br/>
                <label htmlFor="mob">Message</label><br/>
                <textarea id="mess" name="mess" placeholder="Write Your Message Here :)" style={{height:200 + "px"}}/><br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>

            <div className="container2">
                <h1>Contact Us</h1>
                <i className="fa fa-map-marker" aria-hidden="true"></i> H.no 1951, W.N.4, Khaperkheda,Saoner,Nagpur<br/><br/><br/>
                <i className="fa fa-envelope" aria-hidden="true"></i> info@suvidhafoundationedutech.org<br/><br/><br/>
                <i className="fa fa-phone" aria-hidden="true"></i> +91 7020044091<br/><br/><br/>
                <h2 style={{textAlign:"center"}}>Follow us on</h2>
                <div className="icons">
                <a href="#" className="fb btn">
                    <i className="fa fa-facebook fa-fw"></i> 
                </a>
                <a href="#" className="instagram btn">
                    <i className="fa fa-instagram fa-fw"></i> 
                </a>
                <a href="#" className="linkedin btn"><i className="fa fa-linkedin fa-fw">
                    </i> 
                </a>
                </div>
            </div>
            </div>

        </>
    )
}
// style="font-size:24px"
// 