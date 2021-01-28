import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
import TopBar from '../TopBar';
import BottomBar from '../BottomBar';

class Recycle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <TopBar />
        <CssBaseline />
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google} >
          <Marker
            onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'Buying Scarp'}
            position={{ lat: 42.66833178808714, lng: 23.352121650795137 }}
            materials={'Plastic, Glass, Metal'}
            address={'Address: Sofia, Gorublyane, ul. inj.Georgi Belov 2, 1712, България'}
            workingHours={'Working hours: Mon-Fri 09:00-18:00'}
            telephone={'Telephone: +359 87 922 8888'}

          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Hard Grey Metals'}
            position={{ lat: 42.6378858357197, lng: 23.397288078773915 }}
            materials={'Plastic, Glass, Metal, Nylon'}
            address={'Address: Sofia, Gorublyane, ul. inj.Georgi Belov 2, 1712, България'}
            workingHours={'Working hours: Mon-Fri 09:00-18:00'}
            telephone={'Telephone: +359 87 922 8888'}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Ecoland Consult EOOD'}
            position={{ lat: 42.63871985628394, lng: 23.39705256938967 }}
            materials={'Plastic, Glass, Metal'}
            address={'Address: Sofia, Gorublyane, ul. inj.Georgi Belov 2, 1712, България'}
            workingHours={'Working hours: Mon-Fri 09:00-18:00'}
            telephone={'Telephone: +359 87 922 8888'}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Nadin'}
            position={{ lat: 42.65884007980997, lng: 23.264779502111416 }}
            materials={'Plastic, Glass, Metal'}
            address={'Address: Marinkovica 2B, 1618 Boyana, Sofia, България'}
            workingHours={'Working hours: Mon-Fri 09:00-18:00'}
            telephone={'Telephone: +359 2 466 6999'}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Alfa Eco'}
            position={{ lat: 42.68298826596982, lng: 23.381072727062445 }}
            materials={'Plastic, Glass, Metal'}
            address={'Address: Slatina, Geo Milev 162, 1000 Sofia, Bulgaria'}
            workingHours={'Working hours: Mon-Fri 09:00-18:00'}
            telephone={'Telephone: +359 87 911 0711'}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'H&M'}
            position={{ lat: 42.65779249193106, lng: 23.315081413569345 }}
            materials={'Clothes'}
            address={'Address: bul. „Cherni Vrah“ 100, 1407 Hladilnika, Sofia, Bulgaria'}
            workingHours={'Working hours: Mon-Sun 10:00-22:00'}
            telephone={'Telephone: +359 2 419 2020'}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Technopolis'}
            position={{ lat: 42.664375458633636, lng: 23.289073996375002 }}
            materials={'Electronics'}
            address={'Address:  bul. „Bulgaria" 69, 1404 kv. Manastirski livadi, Sofia, Bulgaria'}
            workingHours={'Working hours: Mon-Sun 10:00-22:00'}
            telephone={'Telephone: +359 2 903 5959'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onOpen={this.onOpen}
            onClose={this.onClose}>
            <div>
              <h1 style={{ marginTop: '.5rem', marginBottom: 0 }}>{this.state.selectedPlace.name}</h1>
              <h3 style={{ marginTop: '.5rem' }}>{this.state.selectedPlace.materials}</h3>
              <p>{this.state.selectedPlace.address}</p>
              <p>{this.state.selectedPlace.workingHours}</p>
              <p>{this.state.selectedPlace.telephone}</p>
            </div>
          </InfoWindow>
        </CurrentLocation>
        <BottomBar />
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDh04bTP182Gg83hb3FSpUDlS7sB0GbIWI'
})(Recycle);