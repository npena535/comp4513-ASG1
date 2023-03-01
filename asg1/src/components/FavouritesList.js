import React, { useEffect, useState } from "react";
import FavouritesListItem from "./FavouritesListItem";

const FavouritesList = (props) => {
  const movies = props.favourites;

  return (
    <div className="w-full h-full">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div className="flex flex-col items-center justify-center">
        {props.showFaves ? (
          <button
            onClick={props.handleShowFaves}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500
         to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Hide Faves
          </button>
        ) : (
          ""
        )}
        <h1 className="text-2xl mt-3 text-center">Favourites</h1>

        {/* if no movies exist, display no movies found nicely */}
        {movies.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-5">
            <p className="text-2xl">No favourites yet!</p>
            <p className="text-xl">Try adding a movie!</p>
          </div>
        )}

        {movies.map((movie) => {
          return (
            <FavouritesListItem
              movie={movie}
              removeFavourite={props.removeFavourite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavouritesList;
