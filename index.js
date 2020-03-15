import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from './Example';
import ExampleHooks from './ExampleHooks';
import ExampleHooks2 from './ExampleHooks2';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React+++'
    };
  }

  render() {
    return (
      <div>
        <Example />
        <ExampleHooks />
        <ExampleHooks2 />
        <p>
          Start editing to see some magic happen :)
          Start editing to see some magic happen :)
          Start editing to see some magic happen :)
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
