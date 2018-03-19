import { createStore } from 'redux';

// REDUCER //
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
        case 'RESET':
            return { count: 0 }
        case 'SET':
            return { count: action.set }
        default:
            return state
    };

}

// STORE //
const store = createStore(countReducer);

// ACTION FUNCTIONS //
const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
);

const decrementBy = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
);

const reset = () => ({
    type: 'RESET'
});

const set = ({ set = 0 } = {}) => (
    {
        type: 'SET',
        set: set

    }
)

// ACTION //
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(reset());

store.dispatch(set({ set: 10 }));
store.dispatch(decrementBy({ decrementBy: 2 }));






// DESTRUCTOR OBJECT //
// const book = {
//     title : 'Independent Day',
//     author : 'Ali Ahmad',
//     publisher: {
//         name : 'Dogar'
//     }
// }

// const {title , author} = book
// const {name: publisherName ='none'} = book.publisher
// console.log(`this book ${title} is publisher by ${publisherName}`);