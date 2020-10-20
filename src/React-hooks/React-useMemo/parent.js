import React, {useState} from 'react';
import Child from './child';
const ParentUseMemo =(props)=>{
    const [age, setAge] = useState(26);
    const [name, setName] = useState('莫瑞飞');
    return (
        <div>
            <button onClick={()=>setAge(age+1)}>过年</button>
            <button onClick={()=>setName(`莫瑞飞${new Date().getTime()}`)}>改称呼</button>
            <Child age={age} name={name} />
        </div>
    )
}
export default ParentUseMemo