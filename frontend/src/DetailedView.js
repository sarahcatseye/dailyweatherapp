import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button, Container } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Table } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class DetailedView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        results: [],
        title: '',
        weatherState:'',
        weatherStateIcon:'',
        windSpeed:'',
        windDirection:'',
        temperature:'',
        airPressure:'',
        humidity:'',
        predictability:''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  async componentDidMount() {
    if (this.props.match.params.id !== '') {
      const response = await fetch('/woeid?location=' + this.props.match.params.woeid.toString());
      const body = await response.json();
      this.setState({ string: JSON.stringify(body),
        title: body.title,
        weatherState: body.forecast.weatherState,
        weatherStateIcon: body.forecast.weatherStateIcon,
        windSpeed: body.forecast.windSpeed,
        windDirection: body.forecast.windDirection,
        temperature: body.forecast.temperature,
        airPressure: body.forecast.airPressure,
        humidity: body.forecast.humidity,
        visibility: body.forecast.visibility,
        predictability: body.forecast.predictability
      });
    }
  }

  render() {
    return(
      <div>
      <AppNavbar/>
      <Container fluid>
        <div>
          <Table>
          <tr>
            <td colspan = "2"><h1>{this.state.title}</h1></td>
          </tr>
          <tr>
            <td>
            Weather State
            <img src={this.state.weatherStateIcon} class = "resultImage"/>
            <p>{this.state.weatherState}</p>
            </td>
            <td>
            Temperature
            <h1 class = "temp">{this.state.temperature}°C</h1>
            </td>
          </tr>
          <tr>
            <td>
            Wind Speed
            <p>{this.state.windSpeed} mph</p>
            </td>
            <td>
            Wind Direction
            <p>{this.state.windDirection}°</p>
            </td>
          </tr>
          <tr>
            <td>
              Air Pressure
              <p>{this.state.airPressure} mb</p>
            </td>
            <td>
              Humidity
              <p>{this.state.humidity}%</p>
            </td>
          </tr>
          <tr>
            <td>
              Visibility
              <p>{this.state.visibility} miles</p>
            </td>
            <td>
              Predictability
              <p>{this.state.predictability}%</p>
            </td>
          </tr>
          </Table>
        </div>
      </Container>
      </div>
    );
  }
}

export default DetailedView;
