
//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Assets
import logo from '../../images/logo_transparent.PNG'
import '../../css/info.css'


class Page404 extends Component {
    render() {
        return (
            <div className="body_content padding_top_50">
                <div className="">
                    <h1>Ooooops.... Page not found !!!</h1>

                </div>

                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="LodosTour"  className="center-block img-responsive"/>
                        <h3> Way home </h3>
                    </Link>
                    <br />
                </div>
            </div>
        )
    }
}

export default Page404;