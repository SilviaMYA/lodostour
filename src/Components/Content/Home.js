// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Assets
import '../../css/home.css';
import '../../css/App.css';

//Component
import Carousel from './Carousel/Carousel'

const City = props => (
    props.my_city.name
)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { cities: [] };
    }

   
    componentDidMount() {
        this._baseUrl = 'http://localhost:3001/lodos_tour_mongodb/city';
        axios.get(this._baseUrl)
            .then(response => {
                this.setState({ cities: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    cities_all() {
        return this.state.cities.map(function (currentCity, i) {
            return <City my_city={currentCity} key={i} />;
        });
    }

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

                        <div className="row-fluid team">
                            {this.cities_all()}
                        </div>

                        <div className="clearfix "></div>

                        <div className="row-fluid team marging_top_30">
                            {                                            
                                this.state.cities.map(city =>
                                    <div className="col-md-3 link_thumbnail" id="first-person">
                                        <Link to={'./city_found/'+ city.name.toLowerCase()+'/'+city.code_country.toLowerCase()} key={city.id} className="link">
                                            <div className="thumbnail">
                                                <img src={require('../../images/cities/'+city.name+'_'+city.country+'/main_image.jpg') } alt={city.name} key={city.id}/>

                                                <h3 style={{ color: 'black' }}>{city.name}</h3>
                                                <div className="div_transaction">
                                                    <div className="text glyphicon glyphicon-plus"></div>
                                                </div>
                                                <div className="black_background" style={{ padding: '8px' }}>
                                                    <h2 style={{ color: '#335b3e' }}>{city.description}!</h2>
                                                    <p style={{ color: 'white' }}>Discorey it at your way </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;