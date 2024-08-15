import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Components';

const PosterSlider = (props) => {
  const {posters, title, subtitle, isDark, config} = props;
  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
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
    // console.log(posters);
  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 my-2'>
        <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
          {title}
        </h3>

        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>

      <Slider {...settings}>
          {posters.map((img, index) => (<Poster {...img} isDark={isDark} key={index}/>)
        )}
      </Slider>
    </>
  )
}

export default PosterSlider;