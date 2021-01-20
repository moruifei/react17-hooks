import React from 'react';

const Link =({children, onClick, active})=>{
    return (
        <button
            style={{ marginLeft: '5px' }}
            onClick={onClick}
            disabled={active}
            title="link"
        >
            {children}
        </button>
    )
}
export default Link;