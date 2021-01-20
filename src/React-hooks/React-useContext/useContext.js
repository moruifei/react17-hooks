import React, { useState, useContext, useCallback } from 'react';
import { useStateContext, useDispatchContext, useMessage, MessageStateContext, MessageDispatchContext } from './context';
const parentContext = React.createContext();

function Parent({ children }) {
    const [message, setMessage] = useState([]);
    const addMessage = useCallback((mess) => setMessage((old) => [...old, mess]), []);
    return (
        <MessageStateContext.Provider value={message}>
            <MessageDispatchContext.Provider value={addMessage}>
                {children}
            </MessageDispatchContext.Provider>
        </MessageStateContext.Provider>
    )
}

function Child1(props) { // 发消息1
    const addMessage  = useDispatchContext();
    console.log('child1渲染')
    return (
        <div>
            <h2>我是发消息的</h2>
            <button onClick={() => addMessage("我是Child1组件发出的消息！")}>发消息</button>
        </div>
    )
}
function Child3(props) { //发消息3
    const addMessage = useDispatchContext();
    console.log('child3渲染')
    return (
        <div>
            <h2>我是发消息的</h2>
            <button onClick={() => addMessage('我是Child3组件发出的消息!')}>发消息</button>
        </div>
    )
}
function Child2(props) { // 读消息  
    const message = useStateContext();
    console.log('child2渲染')
    return (
        <div>
            <h2>我是读消息的</h2>
            {
                message.map((e, k) => <p key={k}>{e}</p>)
            }
        </div>
    )
}

function AppWrapper(props) {
    console.log("父组件渲染了")
    return (
        <div>
            <Parent>
                <Child1 />
                <Child3 />
                <Child2 />
            </Parent>
        </div>
    )
}

export default AppWrapper;