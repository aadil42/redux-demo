const redux = require('redux');

// the  reducer function responsible for changing the state.
// it takes two arguments state and action
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

// creating the store. this also takes reducer function which is responsible for chaging state.
const store = redux.createStore(counterReducer);

const mainComponent = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(mainComponent);
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});





