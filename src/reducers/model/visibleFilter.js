import * as actionTypes from '../../consts/actionTypes';

const visibleFilter=(state=actionTypes.visibleFilter.SHOW_ALL, action)=>{
    switch(action.type){
        case actionTypes.SET_VISIBLE_LIST:
            return action.filter
        default:
            return state
    }

}
export default visibleFilter;