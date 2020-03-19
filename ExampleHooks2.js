import React, { useState } from 'react';

let showSex = true;

function ExampleHooks2(){
  //数组结构的方式赋值，多状态不能使用条件语句。
  const [ age, setAge ] = useState(18);
  const [ sex, setSex ] = useState('男'); 
  const [ work, setWork ] = useState('前端程序员'); 

  return (
      <div className="exampleComp ExampleHooks2 exampleHooks">
        <p>年纪：{age}</p>
        <p>年纪：{setAge}</p>
        <p>性别：{sex}</p>
        <p>工作：{work}</p>
      </div>
    );
}




export default ExampleHooks2;