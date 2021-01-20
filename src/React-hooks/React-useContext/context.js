import React, { useContext } from 'react';

export const MessageStateContext = React.createContext();
export const MessageDispatchContext = React.createContext();

export function useStateContext(){ // 使用消息状态
    const context = useContext(MessageStateContext);
    if(context===undefined){
        throw new Error('当前没有context使用')
    }
    return context;
}

export function useDispatchContext(){ // 发消息
    const context = useContext(MessageDispatchContext);
    if(context===undefined){
        throw new Error('当前没有context使用')
    }
    return context;
}

export function useMessage(){
    return [useStateContext(), useDispatchContext()];
}