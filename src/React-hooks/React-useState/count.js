import React, { useState, useEffect, useReducer } from 'react';

function Content() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `当前的点击次数是${count}`;
        // alert(`当前的点击次数是${count}`);
    }, [count])
    return (
        <div>
            <h2>你点击了{`${count}`}次!</h2>
            <button onClick={()=>setCount(count+1)}>增加点击次数</button>
            <button onClick={()=>setCount(count-1)}>减少点击次数</button>
            <button onClick={()=>setCount(0)}>重置</button>
        </div>
    )
}
export default Content;