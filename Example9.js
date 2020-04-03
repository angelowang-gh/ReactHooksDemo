import React, { useState, useEffect, useCallback } from 'react';

  //自定义HOOKS函数用use开头，获取浏览器窗口大小
  function useWinSize() {
    const [ size, setSize ] = useState({
      //获取浏览器宽度和高度
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight,
    })

    // 使用useCallback缓存我们的方法，只执行一次所以[]为空
    const onResize = useCallback(()=>{
      setSize ({
         //获取浏览器宽度和高度
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
      })
    },[])

    //使用useEffect实现生命周期函数，进入的时候监听，退出之后销毁。
    useEffect(()=>{
      //使用监听函数传递两个参数，当窗口变化的时候，执行onResize
      window.addEventListener('resize', onResize)
      //当销毁的时候执行return，删除监听。
      return ()=>{
        window.removeEventListener('resize', onResize)
      }
    },[])

    return size
  }

  // 
  function Example9(){
    const size = useWinSize()
    return(
      <div><h1 style={{color:'red', textAlign:'center'}}>页面的尺寸是：{size.width} X {size.height}</h1></div>
    )



  }



export default Example9;