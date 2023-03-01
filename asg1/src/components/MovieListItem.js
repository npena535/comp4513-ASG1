
import { AiFillHeart } from "react-icons/ai";

import { useNavigate } from 'react-router-dom';

import Heart from '../animated-components/Heart';



const MovieListItem = (props) => {

  const navigate = useNavigate();


  const handleViewMovie = () => {

    navigate(`/movieDetails?id=${props.movie.id}`);


  };

  const toggleFavourite = () => {
  if (props.isFavourite){
    props.removeFavourite(props.movie);
    console.log('removed');
  }
  else {
    props.addFavourite(props.movie);
    console.log('added');
  }
  
  }

  const generateErrorImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = `https://via.placeholder.com/342x513/0f7ca7/000000?text=${props.movie.title}`;

  }

  return (
    <div className="flex items-center py-5 justify-center flex-shrink-0" >
      <div className='group justify-start m-3 relative transition duration-200 hover:scale-[105%]'>

        <img className='shadow-2xl shadow-gray-900 rounded-md h-[513px]' src={`https://image.tmdb.org/t/p/w342${props.movie.poster}`} onError={generateErrorImg} alt={`${props.movie.title} poster`} />
        <div className='flex absolute items-center rounded-md justify-center bg-black/80 transition ease-in duration-200 w-full p-[20px] bottom-0 opacity-0 group-hover:opacity-100 group-hover:z-10'>
          <div className="ml-4 text-white">
            <h2 className="font-semibold text-lg">{props.movie.title}</h2>
            <p className="text-sm ">{props.movie.release_date.substring(0, 4)}</p>
            <p className="text-sm ">Rating: {Math.round(props.movie.ratings.average * 10) / 10}</p>
            <p className="text-sm">Popularity: {Math.round(props.movie.ratings.popularity * 10) / 10}</p>
            <div className="mt-2">


              <button onClick={handleViewMovie} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                View
              </button>
            </div>
          </div>
          {/* <button onClick={handleAddToFavourites} className=" text-white font-bold py-2 px-4 bg-transparent">
            Add to Favourites
          </button> */}
          {/* position div in top right of parent using tailwind */}
          <div className='absolute top-5 right-5 hover:scale-[110%]' onClick={toggleFavourite}>
            {/* <Heart movie={props.movie} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} selected={props.isFavourite} /> */}
            {props.isFavourite && <AiFillHeart color='red' size={30} />}
            {!props.isFavourite && <AiFillHeart color='white' size={30} />}

          </div>

          {/* if is favourite red hard */}
          
          
        </div>
      </div>

    </div>
  );

}

export default MovieListItem;