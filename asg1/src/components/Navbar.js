import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logos/PWLogoV4.png";
import ReactModal from "react-modal";
import About from "./About.js";
// import { Squash as Hamburger } from 'hamburger-react'

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  const [isHome, setHome] = useState(false);
  const [isDefault, setDefault] = useState(false);
  const [isMovieDetails, setMovieDetails] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const setModalOpenTrue = () => {
    setModalOpen(true);
  };

  const setModalOpenFalse = () => {
    setModalOpen(false);
  };

  function getListOfLinks() {
    if (isOpen) {
      return "absolute bg-[#0f7ca7] w-full left-0 top-[45px] h-[calc(100vh-45px)] z-50";
    } else {
      return "hidden sm:block";
    }
  }

  useEffect(() => {
    location.pathname === "/" ? setHome(true) : setHome(false);
    location.pathname === "/default" ? setDefault(true) : setDefault(false);
    location.pathname === "/movieDetails"
      ? setMovieDetails(true)
      : setMovieDetails(false);

    function handleResize() {
      setOpen(false);
    }
    window.addEventListener("resize", handleResize);
  }, [location]);

  return (
    <nav
      className="realtive top-0 z-10 w-full bg-gradient-to-r from-teal-400 via-teal-500
        to-teal-600 h-[50px] px-4 flex justify-between align-middle"
    >
      <div className="h-[50px] flex flex-row items-center justify-center">
        <Link to="/">
          <img
            className="w-[225px] h-[120px] pb-[14px]"
            src={logo}
            alt="logo"
          />
        </Link>

        <ReactModal
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
          }}
          isOpen={modalOpen}
          onRequestClose={setModalOpenFalse}
          ariaHideApp={false}
        >
          <About />
        </ReactModal>
      </div>
      <div className={"z-10 h-[50px] " + getListOfLinks()}>
        <ul className="h-[50px] p-3 flex flex-row gap-5">
          <Link to="/">
            <li
              className={
                "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " +
                (isHome ? "underline font-semibold" : "")
              }
            >
              Home
            </li>
          </Link>
          <Link to="/default">
            <li
              className={
                "block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " +
                (isDefault ? "underline font-semibold" : "")
              }
            >
              Search
            </li>
          </Link>
          <button className="text-white" onClick={setModalOpenTrue}>
            About Us
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
