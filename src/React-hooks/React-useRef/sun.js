import React, {useState, useRef, useImperativeHandle} from 'react';

const Sun = React.forwardRef((props, ref)=>{
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    useImperativeHandle(ref, () => (
        {
            value1: inputRef1.current.value,
            value2: inputRef2.current.value,
            tip: '我是从子组件传过来的附加值 哈哈'
        }
    ))
    const handleChange1=(e)=>{
        setValue1(e.target.value);
    }
    const handleChange2=(e)=>{
        setValue2(e.target.value);
    }
    // console.log(value)
    return (
        <div>
            <label for="first">子元素1号</label>
            <input id="first" label="子元素1号" ref={inputRef1} value={value1} onChange={handleChange1} type='text' />
            <label for="second">子元素2号</label>
            <input id="second" ref={inputRef2} value={value2} onChange={handleChange2} type='text' />
        </div>
        
    )
})
export default Sun;