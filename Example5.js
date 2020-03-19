import React, { Component, useState, createContext } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

//创建一个共享的组件
const CountContext = createContext();

//函数式组件-使用HOOKS
function Example5(){
  const [ count, setCount ] = useState(0); //数组解构的方式赋值

  return (
      <div class="exampleHooks" style={{ padding:'10px', marginTop:'10px' }}>

        <p>You clicked <big>{count}</big> times</p>

        <button onClick={()=>{setCount( count + 1 )}}>
          Click me
        </button>

      </div>
    );
}



export default Example5;