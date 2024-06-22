import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function TreePlantation() {
  return (
    <div className="campaign-container px-8 py-12">
      <h1 className="text-5xl text-center font-bold py-12">Tree Plantation</h1>
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
            <img src="/images/support/tree3.jpeg" alt="Tree Plantation 2" />
            <p className="legend">Planting Trees</p>
          </div>
          <div>
            <img src="/images/support/tree2.jpeg" alt="Tree Plantation 3" />
            <p className="legend">Community Tree Planting</p>
          </div>
        </Carousel>
      </div>
      <div className="campaign-content text-center py-12">
        <h2 className="text-4xl font-bold py-4">
          Join Our Tree Plantation Campaign
        </h2>
        <p className="text-lg py-2">
          Our tree plantation campaign aims to combat deforestation and climate
          change by planting trees in various communities. Join us in making the
          world greener.
        </p>
        <p className="text-lg py-2">
          Participate in our tree planting events and help us reach our goal of
          planting 10,000 trees this year.
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
