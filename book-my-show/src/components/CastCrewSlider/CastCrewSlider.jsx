import React from 'react';
import Slider from 'react-slick';

const CastSlider = (props) => {
    const {posterPath, name, character} = props;
    return <>
        
        <div className='flex flex-col gap-3 mb-14'>
            <div className='flex flex-row justify-center'>
                <img className='w-32 h-32 rounded-full ' src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="https://imgs.search.brave.com/5xo9Hvjscao4C1TFZPnl00sN9Fty4fzjXoBoMxQa2OI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI2LzYxLzEz/LzM2MF9GXzEyNjYx/MTMzN19tOGtjUnRT/NUc3QWhyRnBPUTBX/dWZ4NFBnTDZKNHl4/Zy5qcGc" />
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='text-wrap'>
                    {name}
                </div>
                <div className={character ? `text-slate-500` : `text-white`}> as {character}</div>
            </div>
        </div>
    </>
}

const CastCrewSlider = ({cast}) => {
    const settings = {
        infinite: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows:false,
              swipeToSlide: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
        <Slider {...settings}>
            {cast.map((each, index) => (<CastSlider key={index} posterPath = {each.profile_path} name = {each.name} character ={each.character} />))}
        </Slider>
    </>
  )
}

export default CastCrewSlider;