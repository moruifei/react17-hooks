import React from 'react';
import Input from './input';
const ref = React.createRef();

class Index extends React.Component{
    componentDidMount(){
        console.log(ref.current.focus())
    }
    render(){
        return (<Input ref={ref}/>)
    }
}
// const Index = (props)=>{
//     return (
//         <Input ref={ref}/>
//     )
// }
export default Index;