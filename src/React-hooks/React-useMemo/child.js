import React, {useMemo} from 'react';

const Child=({age, name})=>{
    const changeName=(name)=>{
        console.log('执行了changename')
        return name+'name已经改变了'
    }
    const changedName = useMemo(()=>changeName(name),[name]);
    return (
        <>
            您的年龄是{age}, 姓名是{changedName}
        </>
    )
}
export default Child;