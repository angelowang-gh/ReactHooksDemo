import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from './Example';
import ExampleHooks from './ExampleHooks';
import ExampleHooks2 from './ExampleHooks2';
import Example3 from './Example3';
import Example4 from './Example4';
import { Collapse } from 'antd';
import './style.css';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

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
        <Collapse defaultActiveKey={['5']} onChange={callback}>
            <Panel header="This is panel header 1" key="1">
              <p><Example /></p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p><ExampleHooks /></p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
              <p><ExampleHooks2 /></p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
              <p><Example3 /></p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
              <p><Example4 /></p>
            </Panel>
        </Collapse>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
