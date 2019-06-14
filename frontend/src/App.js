import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/locationSearch/location');
    const body = await response.text();
    console.log(body);
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <nav>
          Weather Status
          <form>
            <input placeholder="Search for..." />
            <p>{this.state.query}</p>
          </form>
          <Search />
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Location List</h2>
            {this.state.groups}
          </div>
        </header>
      </div>
    );
  }
}

class Search extends Component {
    render() {
      return (
        <form>
          <input placeholder="Search for..." />
        </form>
      );
    }
}

export default App;
