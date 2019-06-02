import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'

export { default as Base } from './Components';

class Base extends React.Component {
  render() {
    return (
      <div className="Base">
        <Header/>
        
        <Footer/>
      </div>
    )
  }
}
module.exports = Base;
