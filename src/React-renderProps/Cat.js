import React, {useState} from 'react';
import Mouse from './Mouse';
import catUrl from './cat.jpg';

function Cat(props){
    const mouse = props.mouse;
    return (
        <div style={{ position: 'absolute', left: mouse.x, top: mouse.y  }}>
            <img src={catUrl} alt='' />
        </div>
    )
}
export default Cat;