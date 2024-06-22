import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FoodDonation() {
  return (
    <div className="campaign-container px-8 py-12">
      <h1 className="text-5xl text-center font-bold py-12">Food Donation</h1>
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
            <img src="/images/support/food1.jpeg" alt="Food Donation 1" />
            <p className="legend">Distributing Food</p>
          </div>
          <div>
            <img src="/images/support/food2.jpeg" alt="Food Donation 1" />
            <p className="legend">Distributing Food</p>
          </div>
          <div>
            <img src="/images/support/food3.jpeg" alt="Food Donation 2" />
            <p className="legend">Food Drive</p>
          </div>
        </Carousel>
      </div>
      <div className="campaign-content text-center py-12">
        <h2 className="text-4xl font-bold py-4">
          Join Our Food Donation Campaign
        </h2>
        <p className="text-lg py-2">
          Our food donation campaign aims to provide meals to those in need.
          Join us in fighting hunger in our community.
        </p>
        <p className="text-lg py-2">
          Participate in our food drives and help us distribute food to the less
          fortunate.
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
