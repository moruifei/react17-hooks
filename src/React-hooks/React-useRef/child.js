import React from 'react';
import Sun from './sun'
const Child = React.forwardRef((props, ref) => {
    return (
        <Sun ref={ref} />
    )
})
export default Child;