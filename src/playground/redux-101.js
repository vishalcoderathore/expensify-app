import {createStore} from 'redux';

// Action generators : functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = (props) => {
    return{
        type: 'SET',
        count: props
    }
};

const reset = () => {
    return{
        type: 'RESET'
    }
};

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or actions

const countReducer = (state={count: 0}, action) => {
    // if(action.type === 'INCREMENT'){
    //     return {
    //         count: state.count + 1
    //     }
    // }
    // else if(action.type === 'DECREMENT'){
    //     return {
    //         count: state.count - 1
    //     }
    // }
    // else{
    //     return state;
    // }

    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        };
        case 'SET':
        return{
           count: action.count 
        }
        case 'RESET':
        return{
            count: 0
        };
        default:
        return state;
    }
};

const store = createStore(countReducer); 

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


console.log(`Changing values`);

store.dispatch(incrementCount({incrementBy: 6}));

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount(105));

store.dispatch(incrementCount());

store.dispatch(reset());






