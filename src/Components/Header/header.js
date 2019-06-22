//Dependencies
import React, {Component}from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'

//Assets
import 'bootstrap/dist/css/bootstrap.css';
import "./header.css";


class Header extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };
    render(){
        const {title,items} = this.props;  // const title = this.props;  const items = this.props;
      return (     

         <header className="green_background toolbar">
              <nav className="toolbar__navigation">
                  <div></div>
                  <div className="toolbar__logo"><a href="/">LOGO</a></div>
                  <div className="space"></div>
                  <div className="toolbar__navigation_items">
                    <h2>{title}</h2>
                    <ul>
                        {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
                    </ul> 
                  </div>
              </nav>
          </header>
    
      );
    }
  }

/*
const header = propos =>  (
          <header className="green_background toolbar">
              <nav className="toolbar__navigation">
                  <div></div>
                  <div className="toolbar__logo"><a href="/">LOGO</a></div>
                  <div className="space"></div>
                  <div className="toolbar__navigation_items">
                      <ul>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#lugares_populares">Lugares populares</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#clients">Clients</a></li>
                            <li><a href="#prices">Prices</a></li>
                    </ul>                          
                  </div>

              </nav>
          </header>
             );*/

   /*<div className="navbar green_background">
      <div className="navbar-inner">
          <div className="container">
              <a  href="{{path('home')}}" className="brand">
                  <img src="{{asset('images/logo.jpg')}}" alt="Logo" />
              </a>

              <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                  <i className="icon-menu"></i>
              </button>

              <div className="nav-collapse collapse pull-right">
                  <ul className="nav" id="top-navigation">
                                                  <li><a href="#service">Services</a></li>
                                                  <li><a href="#lugares_populares">Lugares populares</a></li>
                                                  <li><a href="#about">About</a></li>
                                                  <li><a href="#clients">Clients</a></li>
                                                  <li><a href="#prices">Price</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
      </div>
      </div>*/

   


export default Header;

      