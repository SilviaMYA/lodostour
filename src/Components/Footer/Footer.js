//Depedencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Assets
import '../../css/footer.css'
import facebook_icon from '../../images/icons/facebook_1.png'
import linkedin_icon from '../../images/icons/linkedin.png'
import youtube_icon from '../../images/icons/youtube.png'


class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };
  render() {
    const { copyright = "&copy; Lodostour 2019, Silvia Yembi" } = this.props;  // const copyright = this.props; 
    return (
      <div>
        <div className="social_media marging_top_30">
          <div>
            <h1 className="center-block green_color"><b>We Are Social</b></h1>
            <div className="clearfix col-8 center-block">
              <hr className=""/>
            </div>
          </div>
          <ul className="" >
            <li>
              <a target="_blank" href="https://www.facebook.com/silvia.yembi" rel="nofollow noopener noreferrer">
                <img src={facebook_icon} alt="Facebook" title="Facebook" className="img-responsive rounded-circle" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/silvia-yembi/" rel="nofollow noopener noreferrer">
                <img src={linkedin_icon} alt="LinkedIn" title="LinkedIn" className="img-responsive rounded-circle" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com" rel="nofollow noopener noreferrer">
                <img src={youtube_icon} alt="YouTube" title="YouTube" className="img-responsive rounded-circle" />
              </a>
            </li>

          </ul>
        </div>
        <div className="div_footer green_background">
          <p dangerouslySetInnerHTML={{ __html: copyright }} />
        </div>
      </div>
    );
  }
}
export default Footer;
