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
    this.state = {latQuery:'', longQuery:'', results: [], isLoading: true};
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLatChange(event) {
    const target = event.target;
    const value = target.value;
    this.state.latQuery = value;
  }

  handleLongChange(event) {
    const target = event.target;
    const value = target.value;
    this.state.longQuery = value;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.longQuery !== '' && this.state.latQuery !== '') {
      const response = await fetch('/lattlong?latt=' + this.state.latQuery.toString() + '&longi=' + this.state.longQuery.toString());
      const body = await response.json();
      this.setState({ results: body, isLoading: false });
    }
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <h1 className="my-2">Enter your search query below.</h1>
          <div class = "form">
          <Form onSubmit = {this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label className="my-2">Latitude</Label>
              <Input type="name" name="name" id="name" placeholder="Search" onChange={this.handleLatChange} size = "50" />
            </FormGroup>
            <FormGroup>
              <Label className = "my-2">Longitude</Label>
              <Input type="name" name="name" id="name" placeholder="Search" onChange={this.handleLongChange} size = "50" />
            </FormGroup>
            <FormGroup>
              <Button type = "submit">Submit</Button>
            </FormGroup>
          </Form>
          </div>
          <Table className = "mt-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Weather</th>
                <th>Temperature</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.results.map(result => {
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
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CoordinateSearch;
