import React, { useEffect, useState } from 'react';
import MovieListItem from './MovieListItem';


const MovieList = (props) => {
  const movies = props.movies;


  return (
    <div className="w-full h-full">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div>

        {/* if no movies exist, display no movies found nicely */}
        {movies.length === 0 && <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>No movies found</p>
          <p className='text-xl'>Try searching for something else</p>
        </div>}
        {movies.length >= 1 && <p className='text-2xl px-[50px]'>Search Results: </p>}

        {/*Scrollbar css reference => https://tailwind-scrollbar-example.adoxography.repl.co/ && https://www.npmjs.com/package/tailwind-scrollbar */}
        {movies.length >= 1 &&
          <div className='grid grid-cols-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-auto w-full h-[100vh]'>

            {movies.map((movie) => {
              return <MovieListItem movie={movie} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} />
            })}
          </div>}

      </div>

    </div>
  )
}

export default MovieList;