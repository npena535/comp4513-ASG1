import React, { useEffect, useState } from 'react';
import MovieListItem from './MovieListItem';


const MovieList = (props) => {
  const movies = props.movies;

  const [titleAsc, setTitleAsc] = useState(false);
  const [yearAsc, setYearAsc] = useState(false);
  const [ratingAsc, setRatingAsc] = useState(false);
  const [popularityAsc, setPopularityAsc] = useState(false);




  const sortByPopularityAsc = () => {
    setPopularityAsc(!popularityAsc);

    props.sortMovies('popularity', 1);
  }
  const sortByPopularityDesc = () => {
    setPopularityAsc(!popularityAsc);
    props.sortMovies('popularity', -1);
  }
  const sortByRatingAsc = () => {
    setRatingAsc(!ratingAsc);
    props.sortMovies('rating', 1);
  }
  const sortByRatingDesc = () => {
    setRatingAsc(!ratingAsc);
    props.sortMovies('rating', -1);
  }
  const sortByYearAsc = () => {
    setYearAsc(!yearAsc);
    props.sortMovies('releaseDate', 1);
  }
  const sortByYearDesc = () => {
    setYearAsc(!yearAsc);
    props.sortMovies('releaseDate', -1);
  }
  const sortByTitleAsc = () => {
    setTitleAsc(!titleAsc);
    props.sortMovies('title', 1);
  }
  const sortByTitleDesc = () => {
    setTitleAsc(!titleAsc);
    props.sortMovies('title', -1);
    console.log('title desc');
  }





  return (
    <div className="w-full h-[84.5vh]">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div>

        {/* if no movies exist, display no movies found nicely */}
        {movies.length === 0 && <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>No movies found</p>
          <p className='text-xl'>Try searching for something else</p>
        </div>}
        {movies.length >= 1 && <div className='pt-5'>
          <p className='text-2xl px-[50px] inline'>Search Results: </p>

          {titleAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByTitleAsc}>Sort by title ▲</button>
          }

          {!titleAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByTitleDesc}>Sort by title ▼</button>
          }

          {yearAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByYearAsc}>Sort by year ▲</button>
          }

          {!yearAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByYearDesc}>Sort by year ▼</button>
          }

          {ratingAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByRatingAsc}>Sort by rating ▲</button>
          }

          {!ratingAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByRatingDesc}>Sort by rating ▼</button>
          }

          {popularityAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByPopularityAsc}>Sort by popularity ▲</button>
          }

          {!popularityAsc && <button className='text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
         to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={sortByPopularityDesc}>Sort by popularity ▼</button>
          }


          {!props.showFaves && <button
            onClick={props.handleShowFaves}
            className="absolute right-5 text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
            to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
           dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Show Faves
          </button>
          }
          {props.showFaves && <button
            onClick={props.handleShowFaves}
            className="absolute right-5 text-white bg-gradient-to-r from-[#2588AF] via-[#0F7CA7]
            to-[#016A98] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#015983] dark:focus:ring-[#016A98] shadow-lg shadow-teal-500/50 dark:shadow-lg 
           dark:shadow-[#023756] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Hide Faves
          </button>
          }


        </div>
        }


        {/*Scrollbar css reference => https://tailwind-scrollbar-example.adoxography.repl.co/ && https://www.npmjs.com/package/tailwind-scrollbar */}
        {movies.length >= 1 &&
          <div className='grid grid-cols-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-auto w-full h-[77.5vh]'>

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


              return <MovieListItem movie={movie} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} isFavourite={favourite} />

            })}
          </div>}

      </div>

    </div>
  )
}

export default MovieList;