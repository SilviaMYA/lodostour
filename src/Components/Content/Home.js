//Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactBootstrapCarousel from "react-bootstrap-carousel";

import { Button, CardImg } from 'reactstrap';

//Component
//import Carousel from "../../Carousel-old"
//import Carousel from "Carousel"
import Carousel from './Carousel/Carousel'


//APIs
//import Carousel from '../../react-bootstrap/Carousel';

//import createReactclassName from 'create-react-className';
//Assets
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css'


require('bootstrap')


const Home = propos =>  (
  <div>
    <div className="div_carousel">
      <div className="triangle"></div>
      <Carousel className="carousel "/>
    </div>
    <div className="main_home">
      <p className="body_home">
        I am the body
        <span className="btn btn-lg btn-dangerous"> boo</span>
      </p>
    </div>
  </div>

      );


export default Home;

      