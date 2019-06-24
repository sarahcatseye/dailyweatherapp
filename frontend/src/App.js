import React, { Component } from 'react';
import './App.css';
import NameSearch from './NameSearch';
import DetailedView from './DetailedView';
import CoordinateSearch from './CoordinateSearch';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: ''};
    this.handleSearchResultChange = this.handleSearchResultChange.bind(this);
  }

  handleSearchResultChange(results) {
    this.setState({searchResults: results});
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/nameSearch' exact={true} component = {NameSearch}/>
          <Route path='/coordinateSearch' exact={true} component = {CoordinateSearch}/>
          <Route path='/results/:woeid' exact={true} component={DetailedView} />
        </Switch>
      </Router>
    )
  }
}

export default App;
