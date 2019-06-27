// Dependencies
import React, { Component } from 'react';

//Assets
import '../../css/home.css';
import '../../css/App.css';



//Component
import Carousel from './Carousel/Carousel'


class Home extends Component {
  render() {
    return (
        <div className="body_content">
            <div className="div_carousel">
                <Carousel className="carousel "/>
            </div>
                
            <div className="home_page">
                <h1 className="wheat_color">
                    Welcome to <i>LodosTour</i>!
                </h1>
            </div>
        </div>
    );
  }
}

export default Home;