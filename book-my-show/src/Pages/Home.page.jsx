import React, { useState } from 'react';

import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCoursel from '../components/HeroCoursel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const HomePage = () => {
  const  [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);

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
          subject = "List of recommended movies"
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
            subject = "Brand new releases every friday"
            posters = {premierMovies}
            isDark = {true}
          />
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
          title = "Online Streaming Events"
          subject = "Online Streaming"
          posters = {onlineStreamEvent}
          isDark = {false}
        />
      </div>
    </>
  );
}

export default HomePage;