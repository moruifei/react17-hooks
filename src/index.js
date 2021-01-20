import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDom from './Dreact/react-dom';
// import Component from './Dreact/component';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);
console.log(store.getState(), 'state')

const FunctionComponent = (props)=>{
  return (
    <div>
      <p>{props.type}</p>
    </div>
  )
}

// class ClassComponent extends Component{
//   render(){
//     return (
//       <div>
//         我是类组件
//       </div>
//     )
//   }
// }

const jsx=(
  <div>
    <h1>自己实现一个react render方法</h1>
    <h2>深度学习react</h2>
    <a href="https://github.com/facebook/react" target="_blank">react源码</a>
    <FunctionComponent type="函数组件" />
    {/* <ClassComponent type="类组件" /> */}
  </div>
)

// ReactDom.render(jsx, document.getElementById('root'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
