//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Routes
import AppRoutes from './routes';

  render(
    <Router>
      <AppRoutes />
    </Router>,
    document.getElementById('index')
  );



/*import 'bootstrap/dist/css/bootstrap.css';
//import './reactstrap.min.js'
//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//Componenets
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Content/Home'


//Data
import items from '../src/data/menu'

import * as serviceWorker from './serviceWorker';

const element =  
    <div> 
        <Header title="LodosTour" items={items}/>
        <Home /> 
        <Footer />

    </div>;
//ReactDOM.render(element, document.getElementById('index')); //id in public/index.html
*/
