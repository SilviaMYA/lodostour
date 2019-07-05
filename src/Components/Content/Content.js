//Dependencies
import React, {Component} from "react";
import PropTypes from 'prop-types'

//import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Link } from 'react-router-dom';
//import { Button, CardImg } from 'reactstrap';

//Component
//import Carousel from "Carousel"


//APIs
//import Carousel from '../../react-bootstrap/Carousel';

//import createReactclassName from 'create-react-className';
//Asset
import '../../css/App.css'
import '../../css/animate.css'

class Content extends Component{
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render(){
    const { body} = this.props;

    return (
      <div className="Content ">
        <div className="triangle col-xs-12"></div>
        <div className="padding_top_50" >
          {body}
        </div>
      </div>
    );
  }
}

export default Content;

      /*
      const Content = propos =>  (
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

      );*/