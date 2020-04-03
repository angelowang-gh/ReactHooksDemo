import React, { useRef, useState, useEffect } from 'react';

function Example8() {
  // useRef可以获取JSX语法中的的DOM元素
  const inputElement = useRef("2124135435442123423")
  // 点击按钮将写入input的值
  const onButtonClick = ()=>{
    inputElement.current.value = "Hello, World";
    console.log(inputElement);
  }

  // 返回两个值
  const [text, setText ] = useState('BIG-World');

  // 使用useRef来保存input输入的值
  const textRef = useRef()
  useEffect(()=>{
    textRef.current = text
    console.log('textRef.current:', textRef.current)
  })

  return (
    <>
        <input ref={inputElement} type = "text" />
        <button onClick={onButtonClick}>在input上展示文字</button>
        <br />

        <p>使用状态来返回值，通过input获文本框的值，并赋给变量text</p>
        <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        <p>{textRef.current}</p>
    </>
  )

}

export default Example8;