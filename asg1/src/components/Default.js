
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList.js';
import Navbar from './Navbar.js';
import MovieFilter from './MovieFilter.js';
import FavouritesList from './FavouritesList.js';
import { useSearchParams } from "react-router-dom";
import BG from '../bg/default.jpg';




const Default = (props) => {

  const [searchParms, setSearchParms] = useSearchParams();
  const [showFaves, setShowFaves] = useState(false);
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);



  const handleShowFaves = () => {
    setShowFaves(!showFaves);
  }


  function addFavourite(movie) {
    const favouritesCopy = [...favourites];
    // if movie is not in favourites, add it
    if (!favouritesCopy.some((m) => m.id === movie.id)) {
      favouritesCopy.push(movie);
      setFavourites(sortByTitle(favouritesCopy));
    }
  }

  function removeFavourite(movie) {
    const favouritesCopy = [...favourites];
    const index = favouritesCopy.indexOf(movie);
    favouritesCopy.splice(index, 1);
    setFavourites(sortByTitle(favouritesCopy));
    // re-render the dom
    // forceUpdate();
  }

  

  useEffect(() => {
    setMovies(sortByTitle(props.movieData));
  }, [props.movieData]);


  // function to sort movies by title
  function sortByTitle(movies) {
    const movieCopy = [...movies];
    movieCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    return movieCopy;
  }




  function onFilterChange(filters) {
    const filteredMovies = props.movieData.filter((movie) => {
      let includeMovie = true;

      if (filters.title && !movie.title.toLowerCase().includes(filters.title.toLowerCase())) {
        includeMovie = false;
      }

      // if finters.genre is not empty and movie.details.genres is not empty and movie.details.genres.name does not include filters.genre.name
      if ((filters.genre && movie.details.genres === null) || (filters.genre && !movie.details.genres.some(genre => genre.name === filters.genre))) {
        
        includeMovie = false;
      }

      if (movie.details.genres === null && filters.genre === "" ) {
        includeMovie = true;
      }


      if ((filters.minYear) &&
        (parseInt(movie.release_date.substring(0,4)) < parseInt(filters.minYear))
      ) {
        includeMovie = false;
      }

      if ((filters.maxYear) &&
        (parseInt(movie.release_date.substring(0,4)) > parseInt(filters.maxYear))
      ) {
        includeMovie = false;
      }

      if (
        filters.minRating &&
        (movie.ratings.average < filters.minRating)
      ) {
        includeMovie = false;
      }

      if (filters.maxRating &&
        (movie.ratings.average > filters.maxRating)
      ) {
        includeMovie = false;
      }

      return includeMovie;
    });

    setMovies(sortByTitle(filteredMovies));
  }



  return (
    <div className="w-full h-full bg-white animate-[wiggle_2s_ease-in-out]">
      <Navbar />
      <div className="grid grid-cols-4 grid-rows-1">
        
        <div className="row-span-1 col-span-full ">
          <MovieFilter onFilterChange={onFilterChange} movies={props.movieData} handleShowFaves={handleShowFaves} showFave={showFaves} /> 
        </div>
        <div className={showFaves ? "col-span-3 row-span-1 overflow-y-auto" : "col-span-4 row-span-1 overflow-y-auto"}>
          <MovieList movies={movies} addFavourite={addFavourite} removeFavourite={removeFavourite} favourites={favourites}  />
        </div>
        <div className={showFaves ? 'col-start-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 transition ease-in-out duration-300' : 'hidden overflow-y-auto '}>
          <FavouritesList favourites={favourites} removeFavourite={removeFavourite} addFavourite={addFavourite} />
        </div>
      </div>


    </div>
  )

}

export default Default;

// initialSearch={{ title: searchParms.get('title') }}