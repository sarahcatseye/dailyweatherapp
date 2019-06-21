import React, { Component } from 'react';
import './App.css';
import './Home.css';
import AppNavbar from './AppNavbar';
import ResultList from './ResultList';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button, Table } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class CoordinateSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      {
        this.props.results.map(result => {
          return <tr>
            <td style={{whiteSpace: 'nowrap'}}><Link to = {"/results/" + result.woeid}>{result.title}</Link></td>
            <td>
            <img src={result.forecast.weatherStateIcon} class = "resultImage"/>
            {result.forecast.weatherState}
            </td>
            <td>{result.forecast.temperature}°C</td>
          </tr>
        })
      }
    );
  }
}

export default CoordinateSearch;
