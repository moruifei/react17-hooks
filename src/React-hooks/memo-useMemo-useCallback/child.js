
import React, {memo} from 'react';

const Child=({name, setName})=>{
    console.log('子组件被渲染了!')
    return (
        <div style={ {marginTop: '30px'} }>
            {`我的名字是${name.name}！`}
            <button onClick={()=>setName(`曲文芳${Math.random()*100}`)}>改名</button>
        </div>
    )
}
export default memo(Child);