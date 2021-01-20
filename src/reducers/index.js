import {combineReducers} from 'redux';
import { todos } from './todo';
import visibleFilter from './visibleFilter';
import model from './model'

export default combineReducers({ // 该方法中的key对应state数据中的key 可自定义
    todos,
    visibleFilter,
    model,
    noReducer: undefined
})