import React, { Component } from 'react';

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.setState({results: this.props.results});
  }

  render() {
    return(<tr>
      </tr>
    );
  }
}

export default ResultList;
