
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'


//Components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Content'
import Responsive from 'react-responsive';

//Data
import items from './data/menu'

//Assets
import '../src/css/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';


const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render(){
    const { children } = this.props;

    return (
      <div className="App  container-fluid">
        <Header title="LodosTour" items={items}/>
        <Content body={children}  /> 
        <Footer />
     </div>
    );
  }
  
}

export default App;
/*  <div> 
      <Header title="LodosTour" items={items}/>
      <Content /> 
      <Footer />

  </div>  


     <Router>
       <div>
          <Route path="/about" exact strict render={
            ()=>{
              return(<h1>Welcome about</h1>)
            }
          } />
        </div>
     </Router>
    */