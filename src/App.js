import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Content from './React-hooks/React-useState/count';
import Mouse from './React-renderProps/Mouse';
import Cat from './React-renderProps/Cat';
import Dog from './React-renderProps/Dog';
import MouseTracker from './React-renderProps/MouseTracker'
import Input from './hocComponent/input'
import IndexHoc from './React-forwardRef/index'
import Parent from './React-hooks/React-useRef/parent';
import ParentUseMemo from './React-hooks/React-useMemo/parent';
import store from './Redux/store';
import AddTodo from './containers/addTodo';
import VisibleTodos from './containers/visibleTodos';
import Footer from './components/footer'
import DomToImage from 'dom-to-image';
import UseContext from './React-hooks/React-useContext/useContext';
import Problem from './React-hooks/problem/problem';
import MemoUseMemoUseCallback from './React-hooks/memo-useMemo-useCallback/parent';
import Postcss from './mobile-layout'
import Alert from './React-hooks/problem/alert';
import ReactWindow from './React-optimization/react-window';
import Skeleton from './skeleton'

const RenderCatCom = MouseTracker(Cat);
const RenderDodCom = MouseTracker(Dog);
const domToImage = () => {
  let node = document.getElementsByClassName('App')[0];
  DomToImage.toPng(node, { height: 400, width: 400 })
    .then(function (dataUrl) {
      let a = document.createElement('a');
      a.download = 'dom-to-img.png';
      a.href = dataUrl;
      a.click();
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
}
function App() {
  return (
    <div className="App">
      <div className="top-progress"></div>
      {/* <button onClick={ domToImage }>截取屏幕</button> */}
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
      <Parent />
      {/* useMemo */}
      {/* <ParentUseMemo /> */}

      {/* redux 简单示例 */}
      {/* <AddTodo />
      <VisibleTodos />
      <Footer /> */}

      {/* useContext使用 */}
      {/* <UseContext /> */}

      {/* hooks闭包引起的新旧值问题 */}
      {/* <Problem /> */}

      {/* memo useMemo useCallback 优化性能三剑客 */}
      {/* <MemoUseMemoUseCallback /> */}

      {/* postcss-px-to-viewport */}
      {/* <Postcss /> */}

      {/* problem2 */}
      {/* <Alert /> */}

      {/* 前端大数据量处理 */}
      {/* <ReactWindow /> */}

      {/* 骨架屏? */}
      {/* <Skeleton /> */}
    </div>
  );
}

export default App;
