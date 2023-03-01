import React from "react";
import FavouritesListItem from "./FavouritesListItem";

const FavouritesList = (props) => {
  const movies = props.favourites;


  return (
    <div className={props.isDetails ? "w-full h-[94.5vh] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-auto"
      : "w-full h-[84.5vh] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-auto"}>
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div className="flex flex-col items-center justify-center">

        <h1 className={props.isDetails ? "text-2xl mt-3 text-center text-white" : "text-2xl mt-3 text-center"}>Favourites</h1>

        {/* if no movies exist, display no movies found nicely */}

        {movies.length === 0 && <div className='flex flex-col items-center justify-center mt-5'>
          <p className='text-2xl'>No favourites yet!</p>
          <p className='text-xl'>Try adding a movie!</p>
        </div>}

        {movies.map((movie) => {
          let favourite = false;
          // Check if movie is in favourites without using includes
          if (props.favourites.length > 0) {
            for (let i = 0; i < props.favourites.length; i++) {
              if (props.favourites[i].id === movie.id) {
                favourite = true;
              }
            }
          }

          return <FavouritesListItem movie={movie} removeFavourite={props.removeFavourite} isFavourite={favourite} />


        })}
      </div>
    </div>
  );
};

export default FavouritesList;
