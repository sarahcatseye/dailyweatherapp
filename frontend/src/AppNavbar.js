import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      query: ''
    });
  }

  handleChange(event) {
    const target = event.target; // the element that triggered the event
    const value = target.value;
    const name = target.name;
    this.state.query = value;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.query !== '') {
      await fetch('/locationSearch/location', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }
    // this.props.history.push('/groups');
  }

  render() {
    return <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Daily Weather</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Form inline onSubmit = {this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleLocation" className="mr-sm-2">Location</Label>
              <Input type="location" name="location" id="exampleLocation" placeholder="Search" onChange={this.handleChange} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}
