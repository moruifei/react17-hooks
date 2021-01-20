import React from 'react';
import InputToHoc from './hoc';
@InputToHoc
class TextInput extends React.Component {
    componentDidMount(){
    }
    focus(){
        document.getElementById('input').focus()
    }
    render() {
        return (
            <input defaultValue="我是子组件" id='input' type="text" />
        )
    }
}
// const TextInput = (props)=>{
//     console.log(props, '自身')
//     return (
//         <input type="text" />
//     )
// }
export default TextInput;