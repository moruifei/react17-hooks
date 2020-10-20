import React, { useRef, useState, useCallback } from 'react';
import Child from './child';

const Parent = (props) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    // const inputRef = useRef(null);
    const inputRef = useCallback(node => {
        if (node !== null) {
            console.log(node, 'node')
            setValue1(node.value1);
            setValue2(node.value2);
        }
    }, [value1, value2])
    const getInputFocus = () => {
        console.log(inputRef, 'inputRef') // 不能直接获取dom实例时获取的是初始值null
        // inputRef.current.focus();
        // console.log(inputRef.current.value, '子组件的值')
        // setValue(inputRef.current.value)
    }
    return (
        <div>
            {/* 直接获取dom实例 */}
            {/* <input ref={inputRef} type="text" /> */}

            {/* 将dom封装在react组件里, 通过forwardRef可以层层转发inputRef */}
            <label for="first">父元素1号</label>
            <input id="first" value={value1} onChange={() => { }} type="text" />
            <label for="second">父元素2号</label>
            <input id="second" value={value2} onChange={() => { }} type="text" />
            <div style={{ margin: '20px 0' }}>
                <button onClick={getInputFocus}>点击获取输入框焦点</button>
            </div>
            <Child ref={inputRef} />
        </div>
    )
}
export default Parent;