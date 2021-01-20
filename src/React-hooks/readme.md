总结
1. React 使用context时 如果传递的值发生变化 那么context.Provider下包裹的组件都将重新渲染。
优化方法：
1.如果无需使用context的组件可以将此类抽出去 通过 props.children的方式引入 此时组件不会重新渲染。
2.可以设置读写分离，需要传递函数或状态时使用多个context.Provider进行包裹。
3. 传递函数时可以通过useCallback hook进行优化 传递值时可以通过useMemo进行优化。 
4. 对于仅仅根据props进行渲染的组件可以使用memo进行组件优化 React.memo(function(props){}, areEqual)  定义判断函数areEqual = (prevProps, nextProps) => 比较前后两次props并返回布尔值.
5. 对于传递的值为对象时 可以使用useMemo进行优化。类似第四条