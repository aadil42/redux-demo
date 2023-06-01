const redux = require('redux');

// the  reducer function responsible for changing the state.
// it takes two arguments state and action
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter : state.counter + 1
    }
}

// creating the store. this also takes reducer function which is responsible for chaging state.
const store = redux.createStore(counterReducer);

const mainComponent = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(mainComponent);





