import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Boilerplate for using a React front end, Node/Express on the backend, and Webpack with Babel for bundling.</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#main'));