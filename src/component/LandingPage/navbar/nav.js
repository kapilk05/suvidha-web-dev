import React, { useState, useEffect } from "react";
import { Info } from "./constant/navtext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Nav() {
  const [navbar, setNavbar] = useState({
    menu: "hidden",
    icon: faBars,
    view: true,
    viewportWidth: window.outerWidth,
    logo: "/images/navbar-logo/suvidha_desktop_logo.png",
    showCampaignDropdown: false, // State to control dropdown visibility
  });

  useEffect(() => {
    function handleResize() {
      setNavbar((prev) => ({ ...prev, viewportWidth: window.outerWidth }));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const view = navbar.viewportWidth < 1190;
    const logo =
      navbar.viewportWidth < 765
        ? "/images/navbar-logo/suvidha_mobile_logo.png"
        : "/images/navbar-logo/suvidha_desktop_logo.png";
    setNavbar((prev) => ({ ...prev, logo: logo, view: view }));
  }, [navbar.viewportWidth]);

  function handleClick() {
    setNavbar((prev) => {
      const newicon = prev.icon === faBars ? faXmark : faBars;
      const hidden = newicon === faBars ? "hidden" : "";
      return { ...prev, icon: newicon, menu: hidden };
    });
  }

  function toggleCampaignDropdown() {
    setNavbar((prev) => ({
      ...prev,
      showCampaignDropdown: !prev.showCampaignDropdown,
    }));
  }

  return (
    <>
      <div
        className={`flex fixed w-full justify-between text-black bg-white ${
          navbar.view ? "hidden" : ""
        }`}
      >
        <div>
          <Link to="/">
            <img
              className="w-96 h-20 ml-10"
              src={navbar.logo}
              alt="Suvidha-logo"
            />
          </Link>
        </div>
        <div className="flex">
          <div className="flex text-xl py-8 px-4 ">
            {/* Main Navigation Links */}
            {Info.map((texts) => (
              <Link
                to={texts.src}
                key={texts.id}
                className="px-8 hover:text-grey-100 transition ease-in-out duration-100 hover:scale-110"
              >
                {texts.name}
              </Link>
            ))}
            {/* Dropdown for Campaign */}
            <div className="dropdown">
              <button
                className="px-8 hover:text-grey-100 transition ease-in-out duration-100 hover:scale-110"
                onClick={toggleCampaignDropdown}
              >
                Campaign
              </button>
              <ul
                className={`dropdown-menu ${
                  navbar.showCampaignDropdown ? "" : "hidden"
                }`}
              >
                <li>
                  <Link
                    to="/campaign/tree-plantation"
                    className="dropdown-item"
                  >
                    Tree Plantation
                  </Link>
                </li>
                <li>
                  <Link to="/campaign/women-health" className="dropdown-item">
                    Women's Health
                  </Link>
                </li>
                <li>
                  <Link to="/campaign/food-donation" className="dropdown-item">
                    Food Donation
                  </Link>
                </li>
                <li>
                  <Link to="/campaign/beti-padhao" className="dropdown-item">
                    Beti Padhao
                  </Link>
                </li>
              </ul>
            </div>
            {/* End of Dropdown */}
          </div>
          <div className="text-2xl">
            <h1 className="pt-2 mt-2 mx-12">
              <button className="bg-yellow-500 px-10 py-4 rounded-lg text-white font-bold hover:bg-yellow-300 transition ease-in-out duration-100 hover:scale-110">
                Join Us
              </button>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full justify-between text-black bg-white pb-2 ${
          !navbar.view ? "hidden" : ""
        }`}
      >
        <div className="flex">
          <Link to="/">
            <img
              className="md:w-96 w-20 h-20 ml-10"
              src={navbar.logo}
              alt="Suvidha-logo"
              onClick={handleClick}
            />
          </Link>
          <FontAwesomeIcon
            className="ml-auto p-10"
            onClick={handleClick}
            icon={navbar.icon}
          />
          <div className="text-2xl ">
            <h1 className="pt-2 mt-2 mx-12">
              <button className="bg-yellow-500 px-10 py-4 rounded-lg text-white font-bold">
                Join Us
              </button>
            </h1>
          </div>
        </div>
        <div className={`dropdown-menu ${navbar.menu}`}>
          {/* Main Navigation Links */}
          {Info.map((texts) => (
            <Link to={texts.src} key={texts.id} className="p-5 ml-10 block">
              {texts.name}
            </Link>
          ))}
          {/* Dropdown items for Campaign */}
          <ul
            className={`dropdown-menu ${
              navbar.showCampaignDropdown ? "" : "hidden"
            }`}
          >
            <li>
              <Link to="/campaign/action" className="dropdown-item">
                Action
              </Link>
            </li>
            <li>
              <Link to="/campaign/another-action" className="dropdown-item">
                Another Action
              </Link>
            </li>
            <li>
              <Link to="/campaign/something-else" className="dropdown-item">
                Something Else
              </Link>
            </li>
          </ul>
          {/* End of Dropdown */}
        </div>
      </div>
    </>
  );
}
