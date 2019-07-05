//Dependencies
import React, { Component } from 'react';
import Form from './FormContact'
import MapContact from './MapContact'
import Footer from '../Footer/Footer'

class Contact extends Component {

  render() {
    //const {title, rrssicons} = this.props;  // const logo = this.props;  const items = this.props;

    return (
        <div className="body_content col-md-12" style={{paddingBottom: '35px', marginBottom: '40px'}}>
          <h1 className="center-block green_color" style={{ paddingTop: '40px', paddingBottom: '20px' }}><b>Contact us</b></h1>
          <div className="body_contact">

            <div className="col-md-6 div_form">
              <Form />
            </div>

            <div className="col-md-6"  style={{ padding: '0' }}>
              <MapContact />
            </div>
          </div>
        </div>

    );
  }
}

export default Contact;
