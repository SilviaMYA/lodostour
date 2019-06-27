//Dependencies
import React, { Component } from 'react';
import Form from './FormContact'

class Contact extends Component {

  render() {
    //const {title, rrssicons} = this.props;  // const logo = this.props;  const items = this.props;

    return (
      <div className="body_content padding_top_50 animated_contact">
        <h1>Contact us</h1>
        <Form />
      </div>
    );
  }
}

export default Contact;
