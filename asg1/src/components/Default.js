import React, { useEffect, useState } from "react";
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
import MovieFilter from "./MovieFilter.js";
import FavouritesList from "./FavouritesList.js";
import { useSearchParams } from "react-router-dom";
import BG from "../bg/default.jpg";

const Default = (props) => {
  const [searchParms, setSearchParms] = useSearchParams();
  const [showFaves, setShowFaves] = useState(false);
  const [movies, setMovies] = useState([]);

  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')));



  const handleShowFaves = () => {
    setShowFaves(!showFaves);
  };

  const addFavourite = (movie) => {
    const favouritesCopy = [...favourites];
    // if movie is not in favourites, add it
    if (!favouritesCopy.some((m) => m.id === movie.id)) {
      favouritesCopy.push(movie);
      setFavourites(sortByTitle(favouritesCopy));
      saveFavorites(sortByTitle(favouritesCopy));

    }
  }

  const removeFavourite = (movie) => {
    const favouritesCopy = [...favourites];
    let index = null;
    for (let i = 0; i < favouritesCopy.length; i++) {
      if (favouritesCopy[i].id === movie.id) {
        index = i;
        break;
      }
    }

    console.log(index)
    favouritesCopy.splice(index, 1);
    setFavourites(sortByTitle(favouritesCopy));
    saveFavorites(sortByTitle(favouritesCopy));

  }


  const saveFavorites = (favs) => {
    localStorage.setItem('favourites', JSON.stringify(favs));
    console.log('saved');
  }




  useEffect(() => {
    setMovies(sortByTitle(props.movieData));
  }, [props.movieData]);

  // function to sort movies by title
  const sortByTitle = (movies, dir = 1) => {
    const movieCopy = [...movies];
    movieCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1 * dir;
      }
      if (a.title > b.title) {
        return 1 * dir;
      }
      return 0;
    });
    return movieCopy;
  }


  // function to sort movies by rating
  const sortByRating = (movies, dir = 1) => {
    const movieCopy = [...movies];
    movieCopy.sort((a, b) => {
      if (a.ratings.average < b.ratings.average) {
        return 1 * dir;
      }
      if (a.ratings.average > b.ratings.average) {
        return -1 * dir;
      }
      return 0;
    });
    return movieCopy;

  }

  // function to sort movies by release date
  const sortByReleaseDate = (movies, dir = 1) => {
    console.log('sorting by release date');
    const movieCopy = [...movies];
    movieCopy.sort((a, b) => {
      if (parseInt(a.release_date.substring(0, 4)) < parseInt(b.release_date.substring(0, 4))) {
        return 1 * dir;
      }
      if (parseInt(a.release_date.substring(0, 4)) > parseInt(b.release_date.substring(0, 4))) {
        return -1 * dir;
      }
      return 0;
    });
    return movieCopy;
  }


  // function to sort movies by popularity
  const sortByPopularity = (movies, dir = 1) => {
    console.log('sorting by popularity');
    const movieCopy = [...movies];
    movieCopy.sort((a, b) => {
      if (parseInt(a.ratings.popularity) < parseInt(b.ratings.popularity)) {
        return 1 * dir;
      }
      if (parseInt(a.ratings.popularity) > parseInt(b.ratings.popularity)) {

        return -1 * dir;
      }
      return 0;
    });
    return movieCopy;
  }


  const sortMovies = (sortType, dir) => {
    if (sortType === 'title') {
      setMovies(sortByTitle(movies, dir));
    } else if (sortType === 'rating') {
      setMovies(sortByRating(movies, dir));
    } else if (sortType === 'releaseDate') {
      setMovies(sortByReleaseDate(movies, dir));
    } else if (sortType === 'popularity') {
      setMovies(sortByPopularity(movies, dir));

    }
  }





  const onFilterChange = (filters) => {

    const filteredMovies = props.movieData.filter((movie) => {
      let includeMovie = true;

      if (
        filters.title &&
        !movie.title.toLowerCase().includes(filters.title.toLowerCase())
      ) {
        includeMovie = false;
      }

      // if finters.genre is not empty and movie.details.genres is not empty and movie.details.genres.name does not include filters.genre.name

      if ((filters.genre && movie.details.genres === null) || (filters.genre && !movie.details.genres.some(genre => genre.name === filters.genre))) {


        includeMovie = false;
      }

      if (movie.details.genres === null && filters.genre === "") {
        includeMovie = true;
      }



      if ((filters.minYear) &&
        (parseInt(movie.release_date.substring(0, 4)) < parseInt(filters.minYear))

      ) {
        includeMovie = false;
      }


      if ((filters.maxYear) &&
        (parseInt(movie.release_date.substring(0, 4)) > parseInt(filters.maxYear))


      ) {
        includeMovie = false;
      }

      if (filters.minRating && movie.ratings.average < filters.minRating) {
        includeMovie = false;
      }

      if (filters.maxRating && movie.ratings.average > filters.maxRating) {
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
          <MovieFilter
            onFilterChange={onFilterChange}
            movies={props.movieData}
            handleShowFaves={handleShowFaves}
            showFave={showFaves}
          />
        </div>
        <div
          className={
            showFaves
              ? "col-span-3 row-span-1 overflow-y-auto"
              : "col-span-4 row-span-1 overflow-y-auto"
          }
        >
          <MovieList
            movies={movies}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            favourites={favourites}
            sortMovies={sortMovies}
          />

        </div>
        <div
          className={
            showFaves
              ? "col-start-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 transition ease-in-out duration-300"
              : "hidden overflow-y-auto "
          }
        >
          <FavouritesList
            favourites={favourites}
            removeFavourite={removeFavourite}
            addFavourite={addFavourite}
            showFaves={showFaves}
            handleShowFaves={handleShowFaves}
          />
        </div>
      </div>
    </div>
  );
};

export default Default;

