import React from "react";
import Typed from "react-typed";
import TaylorRobot from "./images/TaylorRobot.png";
import NateRobot from "./images/NateRobot.png";
import { SiTailwindcss } from "react-icons/si";

// References for the robot iamges:
// Nate Robot: https://www.pngwing.com/en/free-png-npqzk
// Taylor Robot: https://www.pngwing.com/en/free-png-bywtx

const About = (props) => {
  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="flex flex-col p-7 bg-[rgb(23,52,109)] gap-3 h-[80vh] ml-10 rounded-md shadow-[-11px_10px_1px_4px_rgba(20,163,219,0.74)] text-white">
        <p className="text-4xl">About Us</p>
        <p className=" text-xl">
          This assignment is a movie browser app built as a single page
          application where users get to interact with Movie objects. The web
          application is built with the React framework and styled with using
          Tailwind CSS.
        </p>
        <div className="mt-[6vw]">
          <p className="text-4xl">Gizmos and Gadgets Used:</p>
          <div className="grid grid-cols-3 text-center place-items-center mt-12 gap-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <i className="text-6xl fa-brands fa-js"></i>
              <p className="text-xl">JavaScript</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <i className="text-6xl fa-brands fa-react"></i>
              <p className="text-xl">React</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <i className="text-6xl fa-solid fa-code"></i>
              <p className="text-xl">HTML</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <i class="text-6xl fa-solid fa-file-code"></i>
              <p className="text-xl">CSS</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <SiTailwindcss size={30} />
              <p className="text-xl">Tailwind CSS</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <i className="text-6xl fa-brands fa-square-github"></i>
              <p className="text-xl">GitHub</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[70px]">
        <p className="text-3xl">Meet the developers!</p>

        <div className="flex flex-row gap-5">
          <img src={TaylorRobot} className="h-[250px] w-[300px]" />
          <div className="flex flex-col p-4 bg-[rgb(23,52,109)] gap-3 w-[24vw] h-[20vh] justify-center rounded-md shadow-[-11px_10px_1px_4px_rgba(20,163,219,0.74)] text-white">
            <div className="flex flex-row gap-5">
              <p className="text-3xl">Taylor A.</p>
              <a
                href="https://github.com/taylorsamy"
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:scale-[115%] hover:cursor-pointer"
              >
                <i className="fa-brands fa-github-alt text-3xl hover:text-[#52bee9] duration-300"></i>
              </a>
            </div>
            <p className="text-xl italic font-thin">
              Business Intelligence Developer, SAMRU Governor
            </p>
            <Typed
              className="text-xl"
              strings={["I'm tired. Foo Bar."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 ml-[90px]">
          <div className="flex flex-col p-4 bg-[rgb(23,52,109)] gap-3 w-[24vw] h-[20vh] justify-center rounded-md shadow-[-11px_10px_1px_4px_rgba(20,163,219,0.74)] text-white">
            <div className="flex flex-row gap-5">
              <p className="text-3xl">Nate P.</p>
              <a
                href="https://github.com/npena535"
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:scale-[115%] hover:cursor-pointer"
              >
                <i className="fa-brands fa-github-alt text-3xl hover:text-[#52bee9] duration-300"></i>
              </a>
            </div>
            <p className="text-xl italic font-thin">
              4th Year Student, Coffee Addict
            </p>
            <Typed
              className="text-xl"
              strings={["I'm also tired. Oof. Beep Boop."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <img src={NateRobot} className="h-[376px] w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
