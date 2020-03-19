import React, { Component, useState, useEffect } from 'react';

//函数式组件-使用HOOKS
function ExampleuseEffect(){
  const [ count, setCount ] = useState(0); //数组结构的方式赋值

  useEffect(()=>{ //使用useEffect替代两个生命周期函数
    console.log(`useEffect=>你点了${count}次`)
  })

  return (
      <div style={{border:'2px solid #dedede', padding:'10px', marginTop:'10px'}}>
      <h5>这是函数式组件-ExampleuseEffect</h5>
        <p>You clicked <big>{count}</big> times</p>
        <button onClick={()=>{setCount( count + 1 )}}>
          Click me
        </button>
      </div>
    );
}

//类组件-普通类型
class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count:0 };
}

//组件载入时动作
  componentDidMount(){
    console.log(`componentDidMount=>You clicked ${this.state.count} times`)
  }
//组件更新时时动作
    componentDidUpdate(){
    console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
  }
//方法:每点按钮就加一
  addCount(){
    this.setState( {count:this.state.count+1} )
  }

  render() {
    return (
      <div className="exampleComp example3">
        <p>You clicked <big>{this.state.count}</big> times</p>
        <button onClick={this.addCount.bind(this)}>Click me</button>
        <ExampleuseEffect />
      </div>
    );
  }
}

export default Example3;