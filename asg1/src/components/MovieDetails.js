import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactModal from "react-modal";
import Navbar from "./Navbar";
import { AiOutlineLeft, AiFillHeart } from "react-icons/ai";
import MovieDetailsExtra from "./movie-details-components/MovieDetailsExtra";
import MovieDetailsRatings from "./movie-details-components/MovieDetailsRating";
import TMDBLogo from "./logos/TMDB.png";
import IMDBLogo from "./logos/IMDB.png";
import MovieDetailsStar from "./movie-details-components/MovieDetailsStar";
import StarsRating from "./movie-details-components/StarsRating";
import FavouritesList from "./FavouritesList";



// Notes: References
// React Modal : https://reactcommunity.org/react-modal/;

const MovieDetails = (props) => {
  const tmdbLink = `https://www.themoviedb.org/movie/`;
  const imdbLink = `https://www.imdb.com/title/`;

  const [overview, setOverview] = useState(true);
  const [details, setDetails] = useState(false);
  const [ratings, setRatings] = useState(false);
  const [searchParms, setSearchParms] = useSearchParams();
  const [movie, setMovie] = useState(null);
  const [voted, setVoted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')));
  const [isFavourite, setIsFavourite] = useState(false);
  const [showFaves, setShowFaves] = useState(false);


  const handleShowFaves = () => {
    setShowFaves(!showFaves);
  };


  // const handleShowFaves = () => {
  //   setShowFaves(!showFaves);
  // }

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(movie);
      console.log('removed');
    }
    else {
      addFavourite(movie);
      console.log('added');
    }

  }

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

  // function to sort movies by title
  const sortByTitle = (movies) => {
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


  const saveFavorites = (favs) => {
    localStorage.setItem('favourites', JSON.stringify(favs));
    console.log('saved');
  }




  const setModalOpenTrue = () => {
    setModalOpen(true);
  };

  const setModalOpenFalse = () => {
    setModalOpen(false);
  };

  const handleOverview = () => {
    setOverview(true);
    setDetails(false);
    setRatings(false);
  };

  const handleDetails = () => {
    setDetails(true);
    setOverview(false);
    setRatings(false);
  };

  const handleRatings = () => {
    setRatings(true);
    setOverview(false);
    setDetails(false);
  };

  const generateErrorImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = `https://via.placeholder.com/342x513/0f7ca7/000000?text=${movie.title}`;
  };

  const handleSetVoted = () => {
    setVoted(true);
  };

  useEffect(() => {
    // get movie id from url
    const id = searchParms.get("id");
    // find movie from props.movieData
    const movie = props.movieData.find((m) => m.id == id);
    // set movie
    setMovie(movie);

    // check if movie is in favourites
    if (favourites.some((m) => m.id === movie.id)) {
      setIsFavourite(true);
    }
    else {
      setIsFavourite(false);
    }
  }, [props.movieData, searchParms, favourites]);

  return (
    <div className="w-full h-[93vh]">
      <Navbar />
      <div className="hidden">
        <AiOutlineLeft />
      </div>

      {movie && (
        <div>

          {!showFaves && <button
            onClick={handleShowFaves}
            className="absolute right-5 top-20 text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
            to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
           dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Show Faves
          </button>
          }
          {showFaves && <button
            onClick={handleShowFaves}
            className="absolute right-5 top-20 text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
            to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
           dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Hide Faves
          </button>
          }
          <img
            src={"https:image.tmdb.org/t/p/original" + movie.backdrop}
            className="absolute w-full h-[94.5vh] -z-10 brightness-[0.55] blur-[20px] shadow-none backdrop-blur-sm "
            alt="backdrop"
          ></img>

          <div className={showFaves ? "grid md:grid-cols-3 min-h-[calc(100vh-70px)]" : "grid md:grid-cols-2 min-h-[calc(100vh-70px)]"}>
            <div className="grid place-items-center">
              <img
                className="shadow-xl shadow-gray-900 rounded-md transition duration-200 hover:scale-[105%] hover:cursor-pointer"
                onClick={setModalOpenTrue}
                src={"https://image.tmdb.org/t/p/w342" + movie.poster}
                alt="poster"
                onError={generateErrorImg}
              />
              <ReactModal
                style={{
                  overlay: {
                    backgroundColor: "rgba(0,0,0,0.9)",
                  },
                }}
                isOpen={modalOpen}
                onRequestClose={setModalOpenFalse}
                ariaHideApp={false}
                className="bg-black-900 w-[500px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <img
                  className="shadow-xl shadow-gray-900 rounded-md"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster}
                  alt="poster"
                  onError={generateErrorImg}
                />
              </ReactModal>
            </div>
            <div className="mx-[50px] mt-[80px] flex flex-col gap-6 text-white">
              <div className="flex flex-row items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                  {movie.title}
                </p>
                <div className='hover:scale-[110%]' onClick={toggleFavourite}>
                  {/* <Heart movie={props.movie} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} selected={props.isFavourite} /> */}
                  {isFavourite && <AiFillHeart color='red' size={30} />}
                  {!isFavourite && <AiFillHeart color='white' size={30} />}

                </div>
         
              </div>
              
              <MovieDetailsStar ratings={movie.ratings.average} />

              <div className="flex flex-row gap-5">
                {movie.details.genres.map((genre, index) => {
                  return (
                    <p
                      key={index}
                      className="border-solid text-center px-[10px] rounded-lg bg-[#0f7ca7]"
                    >
                      {genre.name}
                    </p>
                  );
                })}
              </div>

              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-2 ">
                  <p>{movie.release_date.substring(0, 4)}</p>
                  <p>{movie.runtime} mins</p>
                </div>
                <div className="flex flex-row gap-5">
                  <button
                    className="bg-transparent border-b-2 border-gray py-2 mr-3 px-2 leading-tight outline-none hover:border-[#0f7ca7] focus:text-[#52bee9] focus:border-[#0f7ca7]  duration-300"
                    onClick={handleOverview}
                  >
                    OVERVIEW
                  </button>

                  <button
                    className="bg-transparent border-b-2 border-gray py-2 mr-3 px-2 leading-tight outline-none hover:border-[#0f7ca7] focus:text-[#52bee9] focus:border-[#0f7ca7]  duration-300"
                    onClick={handleDetails}
                  >
                    DETAILS
                  </button>
                  <button
                    className="bg-transparent border-b-2 border-gray py-2 mr-3 px-2 leading-tight outline-none hover:border-[#0f7ca7] focus:text-[#52bee9] focus:border-[#0f7ca7] duration-300"
                    onClick={handleRatings}
                  >
                    RATINGS
                  </button>
                </div>

                <div className="flex flex-col gap-10">
                  {overview === true &&
                    details === false &&
                    ratings === false && (
                      <p className="w-[85%]">{movie.details.overview}</p>
                    )}

                  {details === true &&
                    overview === false &&
                    ratings === false && <MovieDetailsExtra movie={movie} />}

                  {ratings === true &&
                    overview === false &&
                    details === false && <MovieDetailsRatings movie={movie} />}

                  <div className="flex flex-col gap-3">
                    <StarsRating voted={voted} id={movie.id} />

                    <div className="flex flex-row gap-5">
                      {!voted ? (
                        <p>Leave a rating!</p>
                      ) : (
                        <p>Thanks for rating!</p>
                      )}
                      {!voted ? (
                        <button disabled={voted} onClick={handleSetVoted}>
                          Submit
                        </button>
                      ) : (
                        ""
                      )}
                    </div>

                  </div>
                  <div className="flex flex-col gap-5">
                    <div className=" flex flex-row gap-10 items-center mt-5">
                      <a
                        href={imdbLink + movie.imdb_id}
                        className="w-[75px] transition duration-200 hover:scale-[115%] hover:cursor-pointer"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={IMDBLogo} alt="IMDB logo" />
                      </a>
                      <a
                        href={tmdbLink + movie.tmdb_id}
                        className="w-[75px] transition duration-200 hover:scale-[115%] hover:cursor-pointer"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={TMDBLogo} alt="TMDB logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={showFaves ? " min-h-[calc(100vh-70px)] top-70" : "hidden overflow-y-auto"}>

<FavouritesList 
    favourites={favourites}
    removeFavourite={removeFavourite}
    addFavourite={addFavourite} 
    isDetails={true}
  />
</div>
          </div>


        </div>
      )}
    </div>
  );
};

export default MovieDetails;
