import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Campaign() {
  return (
    <div className="campaign-container px-8 py-12">
      <h1 className="text-5xl text-center font-bold py-12">Our Campaigns</h1>

      <div className="carousel-container mx-auto max-w-4xl">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showArrows={true}
          dynamicHeight={true}
        >
          <div>
            <img src="/images/support/plant.jpg" alt="Campaign 1" />
            {/* <p className="legend">Tree Plantation</p> */}
          </div>
          <div>
            <img src="/images/support/womenhealth.jpeg" alt="Campaign 2" />
            {/* <p className="legend">Women Health</p> */}
          </div>
          <div>
            <img src="/images/support/feed-people.jpg" alt="Campaign 3" />
            {/* <p className="legend">Food Donation</p> */}
          </div>
          <div>
            <img src="/images/support/betipadhao.png" alt="Campaign 4" />
            {/* <p className="legend">Beti Padhao</p> */}
          </div>
        </Carousel>
      </div>

      <div className="campaign-content text-center py-12">
        <h2 className="text-4xl font-bold py-4">
          Join Our Fight Against Hunger
        </h2>
        <p className="text-lg py-2">
          Our campaigns are focused on providing food, hope, and support to
          those in need. Join us in making a difference in the lives of many.
        </p>
        <p className="text-lg py-2">
          We organize food drives, fundraising events, and volunteer activities
          to help fight hunger in our community. Every contribution counts and
          helps us reach more people.
        </p>
        <p className="text-lg py-2">
          Get involved today and be a part of a community that cares. Together,
          we can share hope and provide sustenance to those who need it most.
        </p>
        <div className="py-8">
          <button className="bg-yellow-500 px-10 py-4 rounded-lg text-white font-bold hover:bg-yellow-300 transition ease-in-out duration-100 hover:scale-110">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
