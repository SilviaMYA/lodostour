
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Content'

//Data
import items from './data/menu'

//Assets
import '../src/css/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';

export class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };


  render(){
    const { children } = this.props;

    return (
      <div className="App">
        <Header title="LodosTour" items={items}/>
        <Content body={children} /> 
        <br/><br/><br/><br/>
        <Footer />
     </div>
    );
  }
  
}

export default App;


