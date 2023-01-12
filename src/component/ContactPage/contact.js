import Navbar from "../LandingPage/navbar/nav"


export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="p-52">
        <h1>Contact Us</h1>
        <div className="container">
    <h2>Send a Message</h2>

    <br/>
    <form method="post">
        <label for="fname">First Name : </label><input type="text" name="fname" id="fname" placeholder="Enter First Name" required/><br/>
        <label for="lname">Last Name : </label><input type="text" name="lname" id="lname" placeholder="Enter Last Name" required/><br/>
        <label for="email">Email : </label><input type="email" name="email" id="email" placeholder="Enter Email" required/><br/>
        <label for="mob">Mobile Number : </label><input type="text" name="mob" id="mob" placeholder="Enter Mobile Number" required/><br/>
        <label for="mess">Message : </label><textarea id="mess" name="mess" rows="10" cols="50" placeholder="Write Your Message Here :)" required></textarea><br/>
        <input type="Submit" value="Send" name="send" id="send"/>
    </form>
    </div>
    <div class="contact">
    <h2>Contact Info</h2><br/>
    <i class="material-icons">place</i>H.No. 1951, W.N.4, Khaperkheda, Saoner, Nagpur<br/>
    <i class="material-icons">email</i>info@suvidhafoundationedutech.org<br/>
    <i class="material-icons">phone</i>+91 7020044091<br/>
    <h2>Follow Us</h2>
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-instagram"></a>
    <a href="#" class="fa fa-linkedin"></a>
    </div>
    </div>

        </>
    )
};
