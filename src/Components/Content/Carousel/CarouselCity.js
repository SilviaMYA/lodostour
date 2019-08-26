import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import { withGetScreen } from 'react-getscreen'

import slider_img1 from '../../../images/cities/Granada_Spain/granada_1.jpg'
import slider_img2 from '../../../images/cities/Granada_Spain/granada_2.jpg'
import slider_img3 from '../../../images/cities/Granada_Spain/granada_3.jpg'
import slider_img4 from '../../../images/cities/Granada_Spain/granada_4.jpg'
import slider_img5 from '../../../images/cities/Granada_Spain/granada_5.jpg'

class CarouselCity extends Component {
  render() {

    return (
      <StyleRoot>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          <div
            role="menuitem"
            tabIndex="0"
          >
            <img
              src={slider_img1}
              alt='title or description'
              style={{ display: 'block', width: '100%' }}
            />
          </div>
          <img src={slider_img2} alt='title or description' data-action="#" />
          <img src={slider_img3} alt='title or description' />
          <img src={slider_img4} alt='title or description' data-action="#" />
          <img src={slider_img5} alt='title or description' />
        </Coverflow>
      </StyleRoot>
    );
  }
}

export default withGetScreen(CarouselCity);