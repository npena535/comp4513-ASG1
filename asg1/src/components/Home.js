import React, { useState } from "react";
import Typed from "react-typed";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

const Home = (props) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [searchTitle, setSearchTitle] = useState("");

  const setTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSearch = (event) => {
    // navigate('/default?title=' + searchTitle);
    const params = new URLSearchParams(location.title);
    params.set("title", searchTitle);
    navigate("/default?" + params.toString());
  };

  const handleAllMovies = (event) => {
    navigate("/default");
  };

  return (
    <div className="w-full h-[100vh] bg-heroIMG bg-cover">
      <Navbar />

      <div className="absolute top-0 w-full -z-10"></div>

      {/* if theres no localStorage.getItem('movieData') then display loading icon */}
      {/* if theres localStorage.getItem('movieData') then display the movie data */}

      {localStorage.getItem("movieData") ? (
        <div>
          <div className="relative w-full mx-auto grid md:grid-cols-2 min-h-[calc(100vh-70px)]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row md:pl-5">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                  We have{" "}
                </p>
                <Typed
                  className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-2"
                  strings={["Romance", "Comedy", "Horror"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </div>
              <p className="md:text-3xl sm:text-2xl py-5 text-xl font-light md:pl-4 pl-2">
                You name it, we have it.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* https://tailwindcomponents.com/component/search-input-1 */}

              <input
                className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300"
                onChange={setTitle}
                type="text"
                placeholder="Enter movie name here"
              />
              <button
                className="text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleAllMovies}
              >
                Show All movies
              </button>
              <button
                className="text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
                to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
               dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          <div className="text-center mt-[-40px]">
            <p className="italic text-gray-500">Hero Image by Joanna Kosinska</p>
            <p className="italic text-gray-500">https://unsplash.com/photos/mjC9apK53a8</p>

          </div>

        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
