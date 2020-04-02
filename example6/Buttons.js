import React, {useContext} from 'react';
//使用UPDATE_CLOLOR将颜色值传递给color组件
import {ColorContext, UPDATE_CLOLOR} from './color';
import "antd/dist/antd.css";

function Buttons(){

  //使用useContext得到了来自color组件派发的颜色值
  const {dispatch} = useContext(ColorContext)

  return (
    <div style={{border:'2px solid darkblue ', padding:'1rem'}}>
      <p>这是按钮组件：</p>
        <button onClick={()=>{dispatch({type:UPDATE_CLOLOR, color:"red"})}}>点击按钮文字=>红色</button>
        <button onClick={()=>{dispatch({type:UPDATE_CLOLOR, color:"chocolate"})}}>点击按钮文字=>巧克力色</button>
    </div>)
}

export default Buttons;