import React from 'react';
import Slider from 'react-slick';
const EntertainmentCard = (props) => {
  return <>
    <div>
      <img src={props.src} key={props.key}alt="Entertainment" className='w-full h-full rounded-lg' />  
    </div>  
  </>
}

const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
    ];
    
    const setting = {
      infinite: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 4,
      intialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          setting: {
            slidesToShow: 4,
            slidesToScroll: 1,
            intialSlide: 1,
          }
        },
        {
          breakpoint: 600,
          setting: {
            slidesToShow: 3,
            slidesToScroll: 1,
            intialSlide: 1
          }
        },
        {
          breakpoint: 480,
          setting: {
            slidesToShow: 2,
            slidesToScroll: 1,
            intialSlide: 1
          }
        }
      ]
    };

    return (
      <>
        <Slider {...setting}>
          {
            EntertainmentImage.map((img, index) => <EntertainmentCard src={img} key={index}/>)
          }
        </Slider>
      </>
    );
}
export default EntertainmentCardSlider;