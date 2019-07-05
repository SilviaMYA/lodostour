//Dependencies
import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

//Assets
import markerIcon from '../../images/icons/map_marker_peque.png';

export class MyMapClass extends Component {


  render() {
    const { placeName = "QQQQQQQQ" } = this.props;
    const { title = "Queen Victoria Market" } = this.props;
    const { latitud = -37.807579 } = this.props;
    const { longitud = 144.956787 } = this.props;


    return (
      <div className="col-md-12 map_contact" >
        <div className="col-md-12" style={{ height: '300px', padding: '0' }}>
          <Marker onClick={this.onMarkerClick}
            name={title} />
          <Map
            google={this.props.google}
            initialCenter={{ lat: latitud, lng: longitud }}
            zoom={15}
            onClick={this.onMapClicked}
          >
            <Marker
              name={placeName}
              title={title}
              position={{ lat: latitud, lng: longitud }}
              icon={{
                url: markerIcon
              }} />
          </Map>

        </div>
        <div className="clearfix"></div>
        <div className="col-md-12 " style={{ paddingTop: '25px' }}>
          <h2 style={{ color: '#335b3e' }}>   Queen St, Melbourne VIC 3000      </h2>
        </div>
      </div>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCc7Ng1L6NfJGM-KYNrCGjfBGIU6c843EQ')
})(MyMapClass)

