import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './React-hooks/React-useState/count';
import Mouse from './React-renderProps/Mouse';
import Cat from './React-renderProps/Cat';
import Dog from './React-renderProps/Dog';
import MouseTracker from './React-renderProps/MouseTracker'
import Input from './hocComponent/input'
import IndexHoc from './React-forwardRef/index'
import Parent from './React-hooks/React-useRef/parent';
import ParentUseMemo from './React-hooks/React-useMemo/parent';

const RenderCatCom = MouseTracker(Cat);
const RenderDodCom = MouseTracker(Dog);

function App() {
  return (
    <div className="App">
      {/* hooks计数器 */}
      {/* <Content />  */}

      {/* 鼠标位置组件 */}
      {/* <Mouse />  */}

      {/* 猫随鼠标移动 */}
      {/* <RenderCatCom />  */}

      {/* 狗随鼠标移动 */}
      {/* <RenderDodCom />  */}

      {/* 装饰器方法使用高阶组件 */}
      {/* <Input />  */}

      {/* refs转发 */}
      {/* <IndexHoc />  */}

      {/* useRef */}
      {/* <Parent /> */}
      {/* useMemo */}
      <ParentUseMemo />
    </div>
  );
}

export default App;
