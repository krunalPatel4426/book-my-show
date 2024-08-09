import axios from 'axios';
import React, { useEffect, useState } from 'react';

import DefaultLayoutHOC from '../Layouts/Default.layout';

import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCoursel from '../components/HeroCoursel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const HomePage = () => {
  const  [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopulerMovies = await axios.get(
        "/movie/popular"
      );
      setPremierMovies(getPopulerMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "/movie/top_rated"
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "/movie/upcoming"
      );
      setOnlineStreamEvent(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCoursel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
          <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
            The Best Of Entertainment
          </h1>

          <EntertainmentCardSlider />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
          title = "Recommended Movies"
          subtitle = "List of recommended movies"
          posters = {recommendedMovies}
          isDark = {false}
        />
      </div>

      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src="" alt="Rupay" className='w-full h-full'/>
          </div>
          <PosterSlider 
            title = "Premiers"
            subtitle = "Brand new releases every friday"
            posters = {premierMovies}
            isDark = {true}
          />
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
          title = "Online Streaming Events"
          subtitle = "Online Streaming"
          posters = {onlineStreamEvent}
          isDark = {false}
        />
      </div>
    </>
  );
}

export default DefaultLayoutHOC(HomePage);