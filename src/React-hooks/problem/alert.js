import React, { useState, useRef, useEffect } from 'react';

function usePrevious(value) { // 之所以能拿到上一次的值 是因为useEffect是最后执行的(浏览器渲染完屏幕后或同步任务之后) 所以第一次value虽然有值但是ref.current却为undefined 总是拿到上一次的值
    console.log(value, '上一次的值')   // 最先打印
    const ref = useRef();
    useEffect(() => {
        console.log(value, 'useEffect value') // 最后打印 也就是说最后才将ref.current 改为value
        ref.current = value;
    })
    console.log(ref.current, '?') // 次之打印
    return ref.current;
}

function Example() {
    console.log('组件被重新渲染')
    const ref = useRef();
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count); // 使用useRef拿到上一次的state 原理是即使当前组件重新渲染 ref对象也不会改变 useRef 会在每次渲染时返回同一个 ref 对象
    function handleAlertClick() { // 事件点击里拿到最新的状态值 即执行完useEffect之后
        console.log(ref.current, 'refCurrent')
        // setTimeout(() => {
            alert('You clicked on: ' + ref.current); 
        // }, 0);
    }
    useEffect(() => {
        ref.current = count;
    })
    return (
        <div>
            {/* 此处ref.current之所以为上一次的值是因为useEffect总是会在浏览器更新完屏幕之后执行 即延迟执行 */}
            <p>You clicked {ref.current} times</p> 
            <p>You clicked last count is { count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
            <button onClick={handleAlertClick}>
                Show alert
        </button>
        </div>
    );
}
export default Example;