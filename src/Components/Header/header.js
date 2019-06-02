import React from "react";
//import createReactClass from 'create-react-class';
import ReactDOM from "react-dom";
import "./header.css";
import App from "../../App";

const element = (
  <div class="navbar {#color_dark_green#}">
  <div class="navbar-inner">
      <div class="container">
          <a href="{{path('home')}}" class="brand">
              <img src="{{asset('images/logo.jpg')}}" alt="Logo" />
          </a>

          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <i class="icon-menu"></i>
          </button>

          <div class="nav-collapse collapse pull-right">
              <ul class="nav" id="top-navigation">
                                              <li><a href="#service">Services</a></li>
                                             <li><a href="#lugares_populares">Lugares populares</a></li>
                                              <li><a href="#about">About</a></li>
                                              <li><a href="#clients">Clients</a></li>
                                             <li><a href="#price">Price</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
  </div>
</div>

);
ReactDOM.render(element, document.getElementById("header_id")); //id in public/index.html
