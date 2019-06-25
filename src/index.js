import 'bootstrap/dist/css/bootstrap.css';
//import './reactstrap.min.js'
//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



//Componenets
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Home'


//Data
import items from '../src/data/menu'

import * as serviceWorker from './serviceWorker';

const element =  
    <div> 
        <Header title="LodosTour" items={items}/>
        <Content /> 
        <Footer />
    </div>;
ReactDOM.render(element, document.getElementById('index')); //id in public/index.html

