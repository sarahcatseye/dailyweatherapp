import React, { Component } from 'react';
import './App.css';
import './Home.css';
import AppNavbar from './AppNavbar';
import ResultList from './ResultList';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button, Table } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class NameSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {query:'', results: [], isLoading: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.state.query = value;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.query !== '') {
      const response = await fetch('/location?location=' + this.state.query);
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
              <Label for="exampleLocation" className= "mb-sm-2">Name</Label>
              <Input type="name" name="name" id="name" placeholder="Search" onChange={this.handleChange} size = "75" />
            </FormGroup>
            <FormGroup>
              <Button type = "submit" className="mt-2">Submit</Button>
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

export default NameSearch;
