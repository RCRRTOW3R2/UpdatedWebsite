import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MediaItem {
  type: 'image';
  url: string;
}

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.11.01 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.10.31 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.09.46 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.09.30 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.09.06 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.08.48 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.08.34 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.08.21 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.07.38 pm.png'
  },
  {
    type: 'image',
    url: '/icons/website_pics/Screenshot 2025-04-09 at 8.07.25 pm.png'
  }
];

export const Slideshow = () => {
  const sliderRef = useRef<Slider>(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: false,
    arrows: true
  };

  const renderMediaItem = (item: MediaItem, index: number) => {
    return (
      <div key={index} className="h-[200px] w-full rounded-lg overflow-hidden bg-[#1E2A3B]">
        <img
          src={item.url}
          alt="Hobby or interest"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="w-full bg-[#243447] rounded-xl p-4 shadow-lg h-fit">
      <Slider ref={sliderRef} {...settings}>
        {mediaItems.map((item, index) => renderMediaItem(item, index))}
      </Slider>
    </div>
  );
}; 