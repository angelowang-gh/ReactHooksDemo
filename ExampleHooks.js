import React, { useState } from 'react';

function ExampleHooks(){
  //数组结构的方式赋值
  const [ count, setCount ] = useState(0); 
  //非数组解构方式赋值
  //let _useState = useState(0);
  //let count = _useState[0];
  //let setState = _useState[1];

  return (
      <div className="exampleComp exampleHooks">
        <p>You clicked <big>{count}</big> times</p>
        <button onClick={()=>{setCount( count + 1 )}}>
          Click me
        </button>
      </div>
    );
}




export default ExampleHooks;