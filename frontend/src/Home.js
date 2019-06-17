import React, { Component } from 'react';
import './App.css';
import './Home.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div>
            <img src = "https://www.metaweather.com/static/img/weather/c.svg" class = "sun"/>
            <h1>Welcome.</h1>
            <p>This web application will display the weather of the day.
            It uses the Metaweather API to show your daily forecast.
            To begin, type the name of your location in the search box above.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
