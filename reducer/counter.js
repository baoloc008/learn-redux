const {CounterAction} = require('../action');

function counter(state = 0, action) {
    switch (action.type) {
        case CounterAction.INCREMENT:
            return state + 1
        case CounterAction.DECREMENT:
            return state - 1
        default:
            return state
    }
}

module.exports = counter;
