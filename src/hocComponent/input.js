import React from 'react';
import Hoc from './hoc';

@Hoc
class Input extends React.Component{
    method=()=>{
        console.log('被包裹组件自己的方法')
    }
    funReact=()=>{
        console.log('react is so fantastic！')
    }
    render(){
        return <input name="name"  {...this.props.inputProps}/>
    }
}
export default Input;