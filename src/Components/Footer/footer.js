//Depedencies
import React, {Component} from 'react';
import PropTypes from 'prop-types'

//import {Link} from 'react-router'
//import {Footer} from 'react-materialize';
// import '../css/App.css'
//import '../css/footer.css'

class Footer extends Component{
  static propTypes = {
    copyright: PropTypes.string
  };
  render(){
    const {copyright = "&copy; Lodostour 2019"} = this.props;  // const copyright = this.props; 
    return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: copyright }} />
    </div>
    );
  }
}
export default Footer;