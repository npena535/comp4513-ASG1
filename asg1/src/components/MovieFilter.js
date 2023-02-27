import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MovieFilter = (props) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [minRating, setMinRating] = useState('');
  const [maxRating, setMaxRating] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {

    const allGenres = []

    props.movies.forEach(movie => {
      if (movie.details.genres) {

        movie.details.genres.forEach(genre => {
          if (!allGenres.some(g => g.id === genre.id)) {
            allGenres.push(genre);
          }
        });
      }

    });

    setGenres(allGenres);


  }, [props.movies]);




  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    props.onFilterChange({ title: event.target.value });
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    props.onFilterChange({ genre: event.target.value });
  };

  const handleYearChange = (event) => {

    if (event.target.id === "year-filter-min") {
      setMinYear(event.target.value);
      props.onFilterChange({ minYear: event.target.value, maxYear: maxYear });
    }
    else if (event.target.id === "year-filter-max") {
      setMaxYear(event.target.value);
      props.onFilterChange({ minYear: minYear, maxYear: event.target.value });
    }
  };

  const handleRatingChange = (event) => {
    if (event.target.id === "rating-filter-min") {
      setMinRating(event.target.value);
      props.onFilterChange({ minRating: event.target.value, maxRating: maxRating });
    }
    else if (event.target.id === "rating-filter-max") {
      setMaxRating(event.target.value);
      props.onFilterChange({ minRating: minRating, maxRating: event.target.value });
    }
  };

  return (
    <div className="h-[70px] flex flex-wrap justify-around items-center mb-4 mt-5">
      <div className="flex items-center mb-2 mr-4">
        <label className="mr-2 font-medium" htmlFor="title-filter">
          Title:
        </label>
        <input
          id="title-filter"
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300"
        />
      </div>
      <div className="flex items-center mb-2 mr-4">
        <label className="mr-2 font-medium" htmlFor="genre-filter">
          Genre:
        </label>
        <select
          id="genre-filter"
          value={genre}
          onChange={handleGenreChange}
          className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300"
        >
          <option key="" value="">All genres</option>
          {genres.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}



        </select>
      </div>
      <div className="flex items-center mb-2 mr-4">
        <label className="mr-2 font-medium" htmlFor="year-filter">
          Year:
        </label>
        <input
          id="year-filter-min"
          type="number"
          value={minYear}
          onChange={handleYearChange}
          className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300 w-[90px]"
        />
        <input
          id="year-filter-max"
          type="number"
          value={maxYear}
          onChange={handleYearChange}
          className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300 w-[90px]"
        />
      </div>
      <div className="flex items-center mb-2 mr-4">
        <label className="mr-2 font-medium" htmlFor="rating-filter">
          Rating:
        </label>
        <input
          id="rating-filter-min"
          type="number"
          step="0.1"
          value={minRating}
          onChange={handleRatingChange}
          className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300 w-[90px]"
        />
        <input
          id="rating-filter-max"
          type="number"
          step="0.1"
          value={maxRating}
          onChange={handleRatingChange}
          className="bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300 w-[90px]"
        />
      </div>

          {/* Button CSS https://flowbite.com/docs/components/buttons/ */}
      <div>
        <button onClick={props.handleShowFaves} className='text-white bg-gradient-to-r from-teal-400 via-teal-500
         to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>{props.showFave ? <p>Hide Faves</p> : <p>Show Faves</p>}</button>
      </div>
    </div>
  );
}




export default MovieFilter;