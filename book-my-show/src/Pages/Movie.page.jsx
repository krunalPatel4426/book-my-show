import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';
import { movieContext } from '../context/Movie.context';

function MovieInfoContainer(){
  const {movie, setMovie} = useContext(movieContext);
  const {premierMovies, setPremierMovies} = useContext(movieContext);
  const {onlineStreamEvent, setOnlineStreamEvent} = useContext(movieContext);
  const {id} = useParams();
  console.log(movie);
  // console.log(id);
  let movieInfo = movie.find((each) => each.id == id);
  if(!movieInfo){
    movieInfo = premierMovies.find((each) => each.id == id);
  }else if(!movieInfo){
    movieInfo = onlineStreamEvent.find((each) => each.id == id);
  }
  console.log(movieInfo);
  // const bg = "bg-gradient-ro-r from-black ...";
  // const URL_IMG = "url('https://image.tmdb.org/t/p/original"+ movieInfo.poster_path + "')";
  // console.log(URL_IMG)
  return (
    <>
      {/* <div className='flex w-full bg-no-repeat bg-contain bg-center h-96' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movieInfo.poster_path}')`}}> */}
        {/* <img className="w-full mx-16" src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt={`${movieInfo.title}`} /> */}
      {/* </div> */}
      <div className='bg-black w-full h-96 flex flex-row gap-11'>
          <div className='ms-24 flex w-44 h-72 mt-12 flex-col'>
            <img className='rounded-lg' src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt={movieInfo.title} />
            <p className='text-white flex justify-center text-sm'>In cinemas</p>
          </div>

          <div className='flex flex-col mt-20 gap-3 text-white'>
            <h4 className='flex text-2xl font-bold'>{movieInfo.title}</h4>

            <div className='flex flex-row gap-6 p-4 items-center rounded-md bg-slate-900'>
              <div className='flex flex-col gap-2'>
                <span className='text-xl'>Movie Rating : {movieInfo.vote_average}</span>
                <span className='text-xs'>Add your rating & review</span>
              </div>
              <button className='bg-red-600 p-2 rounded-xl'>Rate now</button>
            </div>
            <div className='flex flex-row gap-8 text-slate-900'>
              <button className='bg-slate-300 p-2 rounded-md'>2D</button>
              <button className='bg-slate-300 p-2 rounded-md'>{movieInfo.original_language}</button>
            </div>
            <button className='flex mt-6 bg-red-600 w-40 rounded-md justify-center p-4 text-xl'>Book tickits</button>
          </div>
          
      </div>
    </>
  );
}

const MoviePage = () => {
  let {id} = useParams();
  
  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.result);
    };
    requestSimilarMovies();
  },[id]);
  return (
      <>
        <MovieNavbar/>
        <MovieInfoContainer />
      </>
  )
}

export default MoviePage;