import React, {useContext} from 'react';
import { ColorContext } from './color';
import "antd/dist/antd.css";

function ShowArea(){

  const {color} = useContext(ColorContext)

  return (
    <div style={{border:'3px solid darkred', marginBottom:'1rem'}}>
      <p>这是显示区组件</p>
      <h1 style={{color:color, textAlign:'center'}}>字体颜色为：{color}
      </h1>
    </div>
    )
}

export default ShowArea;