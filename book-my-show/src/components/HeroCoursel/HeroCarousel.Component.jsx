import React, { useState } from 'react';
import HeroSlider from 'react-slick';
const HeroCarousel = () => {
  const [images] = useState([
    {
      img : "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg"
    },
    {
      img : "https://assets-in.bmscdn.com/promotions/cms/creatives/1725276118866_cherryblossom1240x300.jpg"
    }
  ]);
  const settingLG = {
    dots : true,
    arrows: true,
    slidesToShow: 1,
    infinite : true,
    speed : 500,
    slideToScroll: 1,
    slidesToShow : 1,
    autoplay : true,
    autoplaySpeed : 2000,
    cssEase : "linear",
  }

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slideToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  // console.log(settings);
  return (
      <>
        <div className='lg:hidden'>
          <HeroSlider {...settings}>
          {images.map((img, index) => (
            <div className='w-full h-56 md:h-80 py-3' key={index}>
              <img src={img.img} alt="Hero Banner" className='w-full h-full rounded-md object-cover'/>
            </div>
          ))}
          </HeroSlider>
        </div>
        <div className='hidden lg:block'>
          
          <HeroSlider {...settingLG}>
            {images.map((img, index) => (
              <div className='w-full h-96 px-2 py-3' key={index}>
                <img src={img.img}
                alt="Hero Banner" 
                className='w-full h-full rounded-md object-cover'/>
              </div>
            ))}
          </HeroSlider>
        </div>
      </>
  )
}

export default HeroCarousel;