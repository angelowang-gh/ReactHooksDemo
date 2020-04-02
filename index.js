import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from './Example';
import ExampleHooks from './ExampleHooks';
import ExampleHooks2 from './ExampleHooks2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';
import Example6 from './example6/Example6';
import { Collapse } from 'antd';
import "antd/dist/antd.css";
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
        <Collapse defaultActiveKey={['7']} onChange={callback}>
            <Panel header="01.普通状态组件-Example-点击计数器" key="1">
              <p><Example /></p>
            </Panel>
            <Panel header="02.ExampleHooks-使用useState数组结构的方式赋值" key="2">
              <p><ExampleHooks /></p>
            </Panel>
            <Panel header="03.ExampleHooks2-数组结构的方式赋值，多状态不能使用条件语句" key="3">
              <p><ExampleHooks2 /></p>
            </Panel>
            <Panel header="04.Example3-使用useEffect替代两个生命周期函数对比" key="4">
              <p><Example3 /></p>
            </Panel>
            <Panel header="05.Example4-加入路由链接两个页面，并使用useEffect替换生命周期函数" key="5">
              <p><Example4 /></p>
            </Panel>
            <Panel header="06.Example5-使用useContext实现父子组件传值" key="6">
              <p><Example5 /></p>
            </Panel>
            <Panel header="07.Example6-使用useContext实现" key="7">
              <p><Example6 /></p>
            </Panel>
        </Collapse>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
