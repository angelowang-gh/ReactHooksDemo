import React from 'react';
import "antd/dist/antd.css";
import ShowArea from './showArea';
import Buttons from './Buttons';
import {Color} from './color';

function Example6(){
  return(
    <div style={{border:'3px solid', padding:'1rem'}}>
      <p>这是Example6组件：将有含有共享值的组件 Color，包裹住需要接受值的组件 "显示组"和"按钮组"</p>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default Example6;