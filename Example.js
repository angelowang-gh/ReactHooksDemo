import React, {Component} from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { count:0 };
  }
  //方法:每点按钮就加一
  addCount(){
    this.setState( {count:this.state.count+1} )
  }

  render() {
    return (
      <div className="exampleComp">
        <p>You clicked <big>{this.state.count}</big> times</p>
        <button onClick={this.addCount.bind(this)}>Click me</button>
      </div>
    );
  }
}


export default Example;