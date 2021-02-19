import React, { Component, useState, useEffect } from 'react';
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
      selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
      allMarkers: [],
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

  componentDidMount() {
    fetch('/api/recycle/places', {
      method: 'GET'
    })
      .then(value => value.json())
      .then(data => {
        this.setState({ allMarkers: data });
        console.log('Set allMafrkers');
      })
      .catch(err => {
        console.log(err);
        alert('Recycle GET failed');

      });
  }

  render() {
    const { allMarkers } = this.state;

    return (
      <React.Fragment>
        <TopBar />
        <CssBaseline />
        <CurrentLocation
          google={this.props.google} >
          {allMarkers.map(element => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={element.name}
                position={{ lat: parseFloat(element.position.lat), lng: parseFloat(element.position.lng) }}
                materials={element.materials.toString}
                address={element.address}
                workingHours={element.workingHours}
                telephone={element.telephone}
              />)
          })}
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