import React from "react";
import Navbar from "./Navbar.js";
import TaylorRobot from "./images/TaylorRobot.png";
import NateRobot from "./images/NateRobot.png";

// References for the robot iamges:
// Nate Robot: https://www.pngwing.com/en/free-png-npqzk
// Taylor Robot: https://www.pngwing.com/en/free-png-bywtx

const About = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <p className="text-4xl">About Us</p>
      <p className="w-[50vw] text-xl">
        This assignment is a movie browser app built as a single page
        application where users get to interact with Movie objects. The web
        application is built with the React framework and styled with using
        Tailwind CSS.
      </p>
      <p className="text-3xl">Meet the developers!</p>
      <div className="flex flex-row gap-5">
        <img src={TaylorRobot} className="h-[300px] w-[300px]" />
        <div className="flex flex-col bg-[rgb(23,52,109)] rounded-md shadow-[-11px_10px_1px_4px_rgba(20,163,219,0.74)] text-white">
          <p className="text-3xl">Taylor A.</p>
          <p>Full Stack Developer, </p>
        </div>
      </div>
    </div>
  );
};

export default About;
