import React, { useState } from "react";

// Reference for the stars rating component
// https://www.youtube.com/watch?v=eDw46GYAIDQ

//Reference for the stars icon - FONT AWESOME
//https://fontawesome.com/icons/star?s=solid&f=classic

const StarsRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-row gap-1">
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;

        return (
          <label className={props.voted ? "-z-[10]" : "z-1"}>
            <input
              type="radio"
              disabled={props.voted}
              name="rating"
              className="hidden"
              value={ratingVal}
              onClick={() => setRating(ratingVal)}
            ></input>
            <i
              key={i}
              onMouseLeave={() => setHover(null)}
              onMouseEnter={() => setHover(ratingVal)}
              className={
                ratingVal <= (hover || rating)
                  ? "text-[#0f7ca7] fa-solid fa-star text-2xl hover:cursor-pointer"
                  : "text-[#dedede] fa-solid fa-star text-2xl hover:cursor-pointer"
              }
            ></i>
          </label>
        );
      })}
    </div>
  );
};

export default StarsRating;
