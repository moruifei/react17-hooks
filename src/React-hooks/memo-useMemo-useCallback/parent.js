import React, { useState, memo, useCallback, useMemo } from 'react';
import Child from './child';
const Parent = (props) => {
    const [age, setAge] = useState(26);
    const [name, setName] = useState( '莫瑞飞');
    const changeName=useCallback((name)=>setName(name), [name]);
    const memoizedVal = useMemo(()=>({name}), [name])
    return (
        <div>
            <h2>我的年龄是：{age}</h2>
            <h2>我的名字是: {name}</h2>
            <button onClick={() => setAge(old => old + 1)}>长一岁</button>
            {/* <button onClick={() => setName(`莫瑞飞${new Date().getTime()}`)}>改名</button> */}
            <Child name={memoizedVal} setName={ changeName } />
        </div>
    )
}
export default Parent