import { createStore } from 'redux';

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + 1;
        case "min":
            return state - 1;
        default:
            return state;
    }
}

export const store = createStore(countReducer);

// store.subscribe(() => console.log(store.getState())).unsubscribe();

store.dispatch({ type: 'add' })
store.dispatch({ type: 'add' })
store.dispatch({ type: 'min' })