import React from 'react';
import FilterLink from '../containers/filterLink';
import * as actionTypes from '../consts/actionTypes'
const Footer=()=>{
    return (
        <div>
            show:  
            <FilterLink filter={actionTypes.visibleFilter.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={actionTypes.visibleFilter.SHOW_COMPLETE}>showComplete</FilterLink>
            <FilterLink filter={actionTypes.visibleFilter.SHOW_ACTIVE}>showActive</FilterLink>
            clear: 
            <FilterLink filter={actionTypes.visibleFilter.SHOW_CLEAR}>重置</FilterLink>
        </div>
    )
}
export default Footer;