import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './React-hooks/React-useState/count';
import Mouse from './React-renderProps/Mouse';
import Cat from './React-renderProps/Cat';
import Dog from './React-renderProps/Dog';
import MouseTracker from './React-renderProps/MouseTracker'
import Input from './hocComponent/input'
import IndexHoc from './React-forwardRef/index'
import * as serviceWorker from './serviceWorker';

const RenderCatCom = MouseTracker(Cat);
const RenderDodCom = MouseTracker(Dog);
ReactDOM.render(
  <React.StrictMode>
    {/* <Content /> // hooks计数器 */}
    {/* <Mouse /> // 鼠标位置组件 */}
    {/* <RenderCatCom /> // 猫随鼠标移动 */}
    {/* <RenderDodCom /> // 狗随鼠标移动 */}
    {/* <Input /> // 装饰器方法使用高阶组件 */}
    {/* <App /> */}
    <IndexHoc /> // refs转发
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
