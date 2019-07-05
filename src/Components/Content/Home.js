'use strict';
// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom'


//Assets
import '../../css/home.css';
import '../../css/App.css';
import alhambraPicture from '../../images/cities/granada_spain/alhambra.jpg'
import buckinghamPalacePicture from '../../images/cities/london_uk/buckingham_palace.jpg'
import santaSofiaMuseumPicture from '../../images/cities/istambul_turkey/museo_santa_sofia.jpg'
import fontanaPicture from '../../images/cities/rome_italy/fontana_di_trevi.jpg'

import myVideo from '../../videos/forest.mp4'

//Component
import Carousel from './Carousel/Carousel'

// import styled from 'styled-components';


// const StyledLink = styled(Link)`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;



class Home extends Component {

    render() {
        return (
            <div className="body_content">
                <div className="div_carousel">
                    <Carousel className="carousel " />
                </div>

                <div className="home_page">

                    <div className="container">
                        <div className="title">
                            <h1 className="" style={{ color: 'red' }}>  Explore your world !</h1>
                            <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                        </div>


                        {/* <div id="slidingDiv5" className="toggleDiv row-fluid single-project" >
                            <div className="col-md-6">
                                <img src={alhambraPicture} className="img-responsive" alt="Den lille havfrue" />
                            </div>
                            <div className="col-md-6 green_background" >
                                <div className="project-description">
                                    <div className="project-title clearfix">
                                        <h3>Webste for Some Client</h3>
                                        <span className="show_hide close">
                                            <i className="icon-cancel"></i>
                                        </span>
                                    </div>
                                    <div className="project-info">
                                        <div>
                                            <span>Client</span>Some Client Name</div>
                                        <div>
                                            <span>Date</span>July 2013</div>
                                        <div>
                                            <span>Skills</span>HTML5, CSS3, JavaScript</div>
                                        <div>
                                            <span>Link</span>http://examplecomp.com</div>
                                    </div>
                                    <p>I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.</p>
                                </div>
                            </div>
                        </div>
<div className="clearfix"></div> */}


                        <div className="row-fluid team">
                            <div className="col-md-3 link_thumbnail" id="first-person">
                                <Link to={'/../../Actions/actionCiyFound.js'} className="link">
                                    <div className="thumbnail">
                                        <img src={alhambraPicture} alt="Granada" />
                                        <h3 style={{ color: 'black' }}>Granada</h3>
                                        <div className="div_transaction">
                                        <div className="text glyphicon glyphicon-plus"></div>
                                    </div>
                                        <div className="black_background" style={{ padding: '8px'}}>
                                            <h2 style={{ color: '#335b3e' }}>Spectacular!</h2>
                                            <p style={{ color: 'white'}}>Discorey it at your way </p>
                                        </div>
                                    </div>
                                    
                                </Link>

                            </div>


                            <div className="col-md-3 link_thumbnail" id="first-person">
                                <Link to={'/'} className="link">
                                    <div className="thumbnail">
                                        <img src={buckinghamPalacePicture} alt="London" />
                                        <h3 style={{ color: 'black' }}>London</h3>
                                        <div className="div_transaction">
                                        <div className="text glyphicon glyphicon-plus"></div>
                                    </div>
                                        <div className="black_background" style={{ padding: '8px'}}>
                                            <h2 style={{ color: '#335b3e' }}>Spectacular!</h2>
                                            <p style={{ color: 'white' }}>Discorey it at your way </p>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <div className="col-md-3 link_thumbnail" id="first-person">
                                <Link to={'/'} className="link">
                                    <div className="thumbnail">
                                        <img src={santaSofiaMuseumPicture} alt="Istambul" />
                                        <h3 style={{ color: 'black' }}>Istambul</h3>
                                        <div className="div_transaction">
                                        <div className="text glyphicon glyphicon-plus"></div>
                                    </div>
                                        <div className="black_background" style={{ padding: '8px'}}>
                                            <h2 style={{ color: '#335b3e' }}>Spectacular!</h2>
                                            <p style={{ color: 'white' }}>Discorey it at your way </p>
                                        </div>
                                    </div>
                                </Link>

                            </div>


                            <div className="col-md-3 link_thumbnail" id="first-person">
                                <Link to={'/'} className="link">
                                    <div className="thumbnail">
                                        <img src={fontanaPicture} alt="Istambul" />
                                        <h3 style={{ color: 'black' }}>Rome</h3>
                                        <div className="div_transaction">
                                        <div className="text glyphicon glyphicon-plus"></div>
                                    </div>
                                        <div className="black_background" style={{ padding: '8px'}}>
                                            <h2 style={{ color: '#335b3e' }}>Spectacular!</h2>
                                            <p style={{ color: 'white' }}>Discorey it at your way </p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>








                </div>
            </div>
        );
    }
}

export default Home;