import React from "react";
import Banner from "./components/Banner/Banner";
import CarForm from "./components/CarForm/CarForm";
import Dealer from "./components/Dealer/Dealer";
import CarBody from "./components/Carbody/Carbody";
import Cardealer from "./components/Cardealer/Cardealer";
import Cars from "./Cars/Cars";
import QualityService from "./components/QualityService/QualityService";
import Brands from "./components/Brands/Brands";
import Ourblog from "./components/Ourblog/Ourblog";
import Footer from "./components/Footer/Footer";
import "./App.css";

const Home=()=>{
  return (
    <>
      <Banner/>
      <CarForm/>
      <Dealer/>
      <CarBody/>
      <Cardealer/>
      <Cars/>
      <QualityService/>
      <Brands/>
      <Ourblog/>
      <Footer/>
    </>
    
  )
}

export default Home;