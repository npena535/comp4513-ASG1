import React from "react";

const MovieDetailsExtra = (props) => {
  // Reference for converting INT values to Currency Format
  // https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const movieRev = currency.format(props.movie.revenue);

  return (
    <div className="flex flex-col gap-5 mr-40">
      <div className="grid grid-cols-2">
        <p>Tagline</p>
        <p className="italic">"{props.movie.tagline}"</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Revenue</p>
        <p>{movieRev}</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Release Date</p>
        <p>{props.movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetailsExtra;
