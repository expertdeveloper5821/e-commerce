import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BannerData } from './BannerData';
import NewArrival from './NewArrival';

const Banner = () => {
    const items = BannerData.map((item) => 
    <div className="w-full sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[800px]">
    <img
      className="cursor-pointer w-full max-w-screen-2xl h-full object-cover mt-0"
      role="presentation"
      src={item.image}
      alt="banner"
    />
  </div>
    )
return(
<>
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    <NewArrival/>
    </>

);
}
export default Banner;