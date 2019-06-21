import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class AppNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false, query: ''};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return <Navbar color="light" light expand="md">
      {this.state.query}
      <NavbarBrand tag={Link} to="/">Daily Weather</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Button color = "link" type = "submit" className = "mr-1"><Link to = "/nameSearch">Search By Name</Link></Button>
          <Button color = "link" type = "submit"><Link to = "/coordinateSearch">Search By Coordinates</Link></Button>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}

export default withRouter(AppNavbar);
