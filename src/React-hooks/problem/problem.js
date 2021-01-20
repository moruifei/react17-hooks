import React, { useState, useEffect, useRef } from 'react';
// 以下为判断鼠标是否点击了输入框和按钮从而处理不同需求
function App() {
  const [flag, setFlag] = useState(true);
  const btnRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    window.addEventListener('click', handleClickOuter)
    return () => window.removeEventListener('click', handleClickOuter)
  }, [])


  const handleClickOuter = (e) => {
    if (!(btnRef.current && btnRef.current.contains(e.target))) {
      if (inputRef.current && inputRef.current.contains(e.target)) {
        setFlag(true)
      } else {
        setFlag(false)
      }
    }
  }
  const log=()=>{
    console.log(inputRef.current.value)
  }
  return (
    <div className="App">
      <input ref={inputRef}/>{flag && <button onClick={log} ref={btnRef}>发送</button>}
    </div>
  );
}
export default App;