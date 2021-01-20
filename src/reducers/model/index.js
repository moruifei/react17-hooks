import {combineReducers} from 'redux';
import { todos } from './todo';
import visibleFilter from './visibleFilter';

export default combineReducers({ // 该方法中的key对应state数据中的key 可自定义
    todos,
    visibleFilter
})