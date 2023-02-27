import React, {useState} from 'react';

import Typed from 'react-typed';
import Navbar from './Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Home = (props) => {
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = useState('');

    const setTitle =(event) => {
        setSearchTitle(event.target.value);
    }

    const handleSearch = (event) => {
        navigate('/default?title=' + searchTitle);
    }

    const handleAllMovies = (event) => {
        navigate('/default')
    }


    return (

        <div className="w-full h-[100vh]">

            <Navbar />
            <div className="absolute top-0 w-full -z-10">

            </div>


            <div className='relative w-full mx-auto grid md:grid-cols-2 min-h-[calc(100vh-70px)]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row md:pl-5'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>We have </p>
                        <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-2'
                            strings={['Romance', 'Comedy', 'Horror']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop />
                    </div>
                    <p className='md:text-3xl sm:text-2xl py-5 text-xl font-light md:pl-4 pl-2'>You name it, we have it.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* https://tailwindcomponents.com/component/search-input-1 */}

                    <input className='bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300' onChange={setTitle} type="text" placeholder='Enter movie name here' />
                    <button className='text-white bg-gradient-to-r from-teal-400 via-teal-500
         to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={handleAllMovies} >Show All movies</button>
                    <button className='text-white bg-gradient-to-r from-teal-400 via-teal-500
         to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg 
        dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={handleSearch}>Search</button>

          {/* Button CSS https://flowbite.com/docs/components/buttons/
          <div>
        <button onClick={props.handleShowFaves} className=''>{props.showFave ? <p>Hide Faves</p> : <p>Show Faves</p>}</button>
      </div> */}

                </div>
            </div>

            <div className='text-center mt-[-40px]'>
                <p className='italic text-gray-500'>hero image credit </p>
            </div>
        </div>

    );

}

export default Home;