import React from "react";
//Reference for the stars icon - FONT AWESOME
//https://fontawesome.com/icons/star?s=solid&f=classic

const MovieDetailsStar = (props) => {
  const roundedNumber = Math.floor(Math.ceil(props.ratings * 2) / 2);

  const StarList = () => {
    const wholeNum = Math.trunc(roundedNumber / 2);
    const decimalNum = roundedNumber % 2;
    let stars = [];

    for (let i = 0; i <= 4; i++) {
      if (i < wholeNum) {
        stars.push(
          <i className="fa-solid fa-star text-2xl text-[#0f7ca7]"></i>
        );
      }

      if (i >= wholeNum) {
        if (i === wholeNum) {
          if (decimalNum >= 1.0) {
            stars.push(
              <i class="fa-sharp fa-solid fa-star-half-stroke text-2xl  text-[#0f7ca7]"></i>
            );
          } else {
            stars.push(
              <i className="fa-solid fa-star text-2xl text-[#dedede]"></i>
            );
          }
        } else {
          stars.push(
            <i className="fa-solid fa-star text-2xl text-[#dedede]"></i>
          );
        }
      }
    }

    return stars;
  };

  return <div className="flex flex-row">{<StarList />}</div>;
};

export default MovieDetailsStar;
