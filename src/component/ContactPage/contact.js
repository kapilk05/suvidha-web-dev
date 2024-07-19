import Navbar from "../LandingPage/navbar/nav";
import "./contact.css";

export default function Contact() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/images/poorchildren-modified.jpg')` }}
    >
      <Navbar />
      <div className="pt-32 pb-20 bg-gray-100 bg-opacity-75">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Send a Message <i className="fa fa-telegram text-blue-500"></i>
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form method="post" className="space-y-6">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-lg font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Enter Your First Name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="lname"
                  className="block text-lg font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Enter Your Last Name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="mob"
                  className="block text-lg font-medium text-gray-900"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mob"
                  name="mob"
                  placeholder="Enter Your Mobile Number"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="mess"
                  className="block text-lg font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="mess"
                  name="mess"
                  placeholder="Write Your Message Here :)"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  style={{ height: "200px" }}
                />
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </form>
          </div>

          <div className="bg-white bg-opacity-75 p-8 mt-12 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Contact Us
            </h1>
            <p className="text-lg text-gray-900">
              <i
                className="fa fa-map-marker text-blue-500"
                aria-hidden="true"
              ></i>{" "}
              H.no 1951, W.N.4, Khaperkheda, Saoner, Nagpur
            </p>
            <p className="text-lg text-gray-900">
              <i
                className="fa fa-envelope text-blue-500"
                aria-hidden="true"
              ></i>{" "}
              info@suvidhafoundationedutech.org
            </p>
            <p className="text-lg text-gray-900">
              <i className="fa fa-phone text-blue-500" aria-hidden="true"></i>{" "}
              +91 7020044091
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">
              Follow us on
            </h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-900 hover:text-blue-500">
                <i className="fa fa-facebook fa-fw text-3xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-500">
                <i className="fa fa-instagram fa-fw text-3xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-500">
                <i className="fa fa-linkedin fa-fw text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
