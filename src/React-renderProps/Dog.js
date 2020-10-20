import React, {useState} from 'react';
import dogUrl from './dog.jpg';

export default function Dog(props){
    const mouse = props.mouse
    return (
        <div style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
            <img src={dogUrl} alt='' />
        </div>
    )
}