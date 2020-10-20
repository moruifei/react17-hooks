import React from 'react';
import InputToHoc from './hoc';

class TextInput extends React.Component {
    componentDidMount(){
    }
    focus(){
        document.getElementById('input').focus()
    }
    render() {
        return (
            <input id='input' type="text" />
        )
    }
}
// const TextInput = (props)=>{
//     console.log(props, '自身')
//     return (
//         <input type="text" />
//     )
// }
export default InputToHoc(TextInput);