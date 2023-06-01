# Basic Redux setup.

## Install Redux with
Install it with "npm install redux" in your terminal

## Import it.
You can import it with basic node import syntext like so: 
const redux = require('redux');

## Create store
Now you need to create the store. For that you need to  call a method createStore on the redux.
const store  = redux.createStore();

## Pass reducre function to your store when creating it.
You need to pass the reducer function. Which is responsible for updating your store. So, you need to modify the above code.  
const sotre = redux.createStore(counterReducer)

## Now create a component/funciton where we're going to use the store data. 
const myComponent = () = > {
   const myState = store.getState();
   console.log(myState);
}

## Now We need to subscribe the component to the store. myComponent will now be able to use latest store/state data.
sotre.subscribe(myComponent);

## That's it!! 
now you just need to use it. Call dispatch method on the store and pass the action object to indicate how you intend to change the store.
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});

## The reducer function
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