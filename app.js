const {store, dispatch} = require('./store');
const {increment, decrement} = require('./action');

store.subscribe(() => console.log(store.getState()));

dispatch(increment());

dispatch(increment());

dispatch(decrement());
