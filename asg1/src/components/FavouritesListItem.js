import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Heart from '../animated-components/Heart';

const FavouritesListItem = (props) => {

  function handleRemoveFromFavourites() {
    props.removeFavourite(props.movie);
  }


  const handleViewMovie = () => {
    // Implement view movie functionality
  };

  return (
    <div className="flex items-center border-b border-gray-300 py-4 justify-center" >
      <div className="flex-shrink-0 w-20">
        <img src={`https://image.tmdb.org/t/p/w92${props.movie.poster}`} alt={`${props.movie.title} poster`} />
      </div>
      <div className="ml-4">
        <h2 className="font-semibold text-lg">{props.movie.title}</h2>
        <p className="text-sm text-gray-600">{props.movie.release_date.substring(0, 4)}</p>
        <p className="text-sm text-gray-600">Rating: {Math.round(props.movie.ratings.average * 10) / 10}</p>
        <p className="text-sm text-gray-600">Popularity: {Math.round(props.movie.ratings.popularity * 10) / 10}</p>
        <div className="mt-2">
          <button onClick={handleRemoveFromFavourites} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Remove from favourites
          </button>
  
{/* <Heart movie={props.movie} removeFavourite={props.removeFavourite}/> selected={true} */}
        </div>
      </div>
    </div>


  );

}

export default FavouritesListItem;