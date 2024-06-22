import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BetiPadhao() {
  return (
    <div className="campaign-container px-8 py-12">
      <h1 className="text-5xl text-center font-bold py-12">Beti Padhao</h1>
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
            <img src="/images/support/betipadhao.png" alt="Beti Padhao 1" />
            <p className="legend">Girls Education</p>
          </div>
          <div>
            <img src="/images/support/beti2.jpeg" alt="Beti Padhao 2" />
            <p className="legend">Educating Girls</p>
          </div>
        </Carousel>
      </div>
      <div className="campaign-content text-center py-12">
        <h2 className="text-4xl font-bold py-4">Support Beti Padhao</h2>
        <p className="text-lg py-2">
          Our Beti Padhao campaign focuses on promoting education for girls.
          Join us in empowering girls through education.
        </p>
        <p className="text-lg py-2">
          Participate in our educational programs and help us ensure that every
          girl has access to quality education.
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
