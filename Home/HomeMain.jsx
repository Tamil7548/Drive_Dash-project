import React from 'react';
import BannerH from '../Banner/Banner.jsx';
import CarFormH from '../CarForm/CarForm.jsx'
import AboutTwo from '../Cardealer/AboutUs.jsx';
import CarBodyH from '../Carbody/Carbody.jsx';
import CarDealerH from '../Dealer/Dealer.jsx';
import CarsHRedux from '../Cars/Cars.jsx';
import QualityServiceH from '../QualityService/QualityService.jsx';
import Brands from '../Brands/Brands.jsx';
import AboutSwiper from '../AboutThree.jsx';
import OurBlog from '../Ourblog/OurBlog.jsx';

const HomeMain=()=>{
    return(
        <>
          <BannerH/>
          <CarFormH/>
          <AboutTwo/>
          <CarsHRedux/>
          <CarBodyH/>
          <CarDealerH/>
          <QualityServiceH/>
          <Brands/>
          <AboutSwiper/>
          <OurBlog/>
        </>
    );    
}

export default HomeMain;