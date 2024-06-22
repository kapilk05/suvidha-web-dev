import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function WomenHealth() {
  return (
    <div className="campaign-container px-8 py-12">
      <h1 className="text-5xl text-center font-bold py-12">Women Health</h1>
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
            <img src="/images/support/women4.jpeg" alt="Women Health 1" />
            <p className="legend">Health Camp</p>
          </div>
          <div>
            <img src="/images/support/women2.jpeg" alt="Women Health 1" />
            <p className="legend">Health Camp</p>
          </div>
          <div>
            <img src="/images/support/women3.jpeg" alt="Women Health 2" />
            <p className="legend">Health Awareness</p>
          </div>
          <div>
            <img src="/images/support/women1.jpeg" alt="Women Health 1" />
            <p className="legend">Health Camp</p>
          </div>
        </Carousel>
      </div>
      <div className="campaign-content text-center py-12">
        <h2 className="text-4xl font-bold py-4">Support Women's Health</h2>
        <p className="text-lg py-2">
          Our women's health campaign focuses on providing health services and
          education to women in underserved communities. Join us in promoting
          better health for women.
        </p>
        <p className="text-lg py-2">
          Participate in our health camps and workshops to help women lead
          healthier lives.
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
