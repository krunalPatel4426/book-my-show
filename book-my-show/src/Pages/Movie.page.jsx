import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastCrewSlider from '../components/CastCrewSlider/CastCrewSlider';
import Footer from '../components/Footer.component/Footer.component';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import { movieContext } from '../context/Movie.context';
function MovieInfoContainer(){
  const {movie, setMovie} = useContext(movieContext);
  const {premierMovies, setPremierMovies} = useContext(movieContext);
  const {onlineStreamEvent, setOnlineStreamEvent} = useContext(movieContext);
  const {id} = useParams();
  // console.log(movie);
  // console.log(id);
  let movieInfo = movie.find((each) => each.id == id);
  if(!movieInfo){
    movieInfo = premierMovies.find((each) => each.id == id);
  }else if(!movieInfo){
    movieInfo = onlineStreamEvent.find((each) => each.id == id);
  }

  //movies genre api call
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const requestGenre = async () => {
      const getGenre = await axios.get("/genre/movie/list");
      setGenre(getGenre.data.genres);
    }
    requestGenre();
  });
  // console.log(genre);
  // console.log(movieInfo);
  const movieGenreId = movieInfo.genre_ids;
  const movieGenre = genre.filter((each) => movieGenreId.includes(each.id));
  // console.log(movieGenre)
  // console.log(movieGenreId)
  // const bg = "bg-gradient-ro-r from-black ...";
  // const URL_IMG = "url('https://image.tmdb.org/t/p/original"+ movieInfo.poster_path + "')";
  // console.log(URL_IMG)


  const styleBackgroundImg = {
    backgroundImage: `linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34, 0.03) 97.47%, rgb(34,34,34) 100%), url('https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>
      <div className='flex w-full bg-no-repeat bg-contain bg-center h-96' style={styleBackgroundImg}>
      <div className='w-full h-96 flex flex-row gap-11'>
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
            <div className='flex flex-row gap-8 h-7 text-slate-900'>
              <button className='bg-slate-300 p-2 rounded-md flex items-center'>2D</button>
              <button className='bg-slate-300 p-2 rounded-md flex items-center'>{movieInfo.original_language}</button>
            </div>
              <div>
                <p className='text-white'>{movieGenre.map((each) => ` ${each.name} , `)}</p>
              </div>
            <button className='flex mt-3 bg-red-600 w-40 h-12 items-center rounded-md justify-center p-4 text-xl'>Book tickits</button>
          </div>
          
      </div>

      </div>
    </>
  );
}

const AboutMovie = () => {

}

const Cast = ({cast}) => {
  let movieCast;
  if(cast){
    movieCast = cast.filter((each) => each.known_for_department === "Acting");
    return <>
    <div className='px-24 mt-14'>
      <div className='font-bold text-3xl'>Cast</div>
      <CastCrewSlider cast = {movieCast} />
    </div>
    </>
  }else{
    return <>
    </>
  }
}
const Crew = ({cast}) => {
  let movieCrew;
  // console.log(cast)
  if(cast){
    movieCrew = cast.filter((each) => each.known_for_department === "Crew");
    if(movieCrew.length !== 0){
      return <>
      <div className='px-24 mt-14'>
        <div className='font-bold text-3xl'>Crew</div>
        <CastCrewSlider cast = {movieCrew} />
      </div>
      </>
    }else{
      return <>
      </>
    }
  }else{
    return <>
    </>
  }
}

const AlsoLikeMovies = ({id}) => {
  const {premierMovies, setPremierMovies} = useContext(movieContext);
  // console.log(id)
  // console.log(premierMovies[0])
  const alikeMovie = premierMovies.filter((each) => each.id != id);
  return <>
    <div className='px-24'>
      <PosterSlider 
            title = "You might also like"
            subtitle = ""
            posters = {alikeMovie}
            isDark = {false}
          />
    </div>
  </>
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
  // console.log(cast)
  return (
      <>
        <MovieNavbar/>
        <MovieInfoContainer />
        <AboutMovie />
        <Cast cast = {cast}/>
        <Crew cast = {cast}/>
        <AlsoLikeMovies id = {id} />
        <Footer />
      </>
  )
}

export default MoviePage;