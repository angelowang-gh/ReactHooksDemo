import React, { createContext, useReducer } from 'react';

//通过ColorContext对颜色值进行了共享
export const ColorContext = createContext({})

//申明一个常量
export const UPDATE_CLOLOR = "UPDATE_CLOLOR"

//声明一个方法
const reducer = (state,action) => {
    switch(action.type){
      //将颜色直接返回回去
      case UPDATE_CLOLOR:
        return action.color
      default:
        return state
    }
}

//颜色组件，接受一个子组件的传值
export const Color = (props) => {

  //使用useReducer传递两个值，颜色和派发
  //useReducer内传递一个方法和一个颜色初始值
  const [color, dispatch] = useReducer(reducer, 'blue')

  return (
    //传递了一个共享的颜色值，value是一个初始值，页面文字初始显示值
    // <ColorContext.Provider value = {{color:"red"}}>
    //color组件里实现了Redax功能
    <ColorContext.Provider value = {{color, dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}