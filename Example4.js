import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

function Index(){
  useEffect(()=>{
    //进入首页时显示
    console.log('userEffect=>老弟，你来了！Index页面')
    //解绑操作
    return ()=> {
      console.log('return的箭头函数=>老弟你走了——Index')
    }
  },[]) //中括号的意思是：只有中括号的数据发生变化时才会执行。
  return <div class="routePage">
    <p>标题：这是首页</p>
    <h2>JSPang.com</h2>
  </div>
}

function List(){
    useEffect(()=>{
    console.log('userEffect=>老弟，你来了！List页面')
  },[])
  return <div class="routePage">
    <p>标题：这是列表</p>
    <h3>List Page</h3>
  </div>
}

//函数式组件-使用HOOKS
function Example4(){
  const [ count, setCount ] = useState(0); //数组结构的方式赋值

  useEffect(()=>{ //使用useEffect替代两个生命周期函数
    console.log(`useEffect=>你点了${count}次`)
    return ()=>{
      console.log('================================')
    }
  })

  return (
      <div style={{border:'2px solid #dedede', padding:'10px', marginTop:'10px'}}>
      <h5>这是函数式组件-ExampleuseEffect</h5>

        <p>You clicked <big>{count}</big> times</p>

        <button onClick={()=>{setCount( count + 1 )}}>
          Click me
        </button>

        {/* 路由链接开始 */}

        <BrowserRouter>
          <ul>
            <li><Link to = "/">首页</Link></li>
            <li><Link to = "/List">列表</Link></li>
          </ul>

          <Route path = "/" exact component={Index} /> {/* exact是精确匹配 */}
          <Route path = "/list" component={List} />
        </BrowserRouter>

      </div>
    );
}



export default Example4;