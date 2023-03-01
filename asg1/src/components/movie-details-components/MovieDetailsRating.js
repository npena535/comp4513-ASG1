import React from "react";


const MovieDetailsRatings = (props) => {
  
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2">
        <p>Popularity</p>
        <p>{Math.round(props.movie.ratings.popularity * 10) / 10}</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Average</p>
        <p>{props.movie.ratings.average}</p>
      </div>
      <div className="grid grid-cols-2">
        <p >Vote Count</p>
        <p>{props.movie.ratings.count}</p>
      </div>
      
    </div>
  );
};

export default MovieDetailsRatings;
