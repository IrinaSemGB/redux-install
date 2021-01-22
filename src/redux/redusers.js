const initialState = {
    counters: [
        {id: 1, number: 10},
        {id: 2, number: 20},
        {id: 3, number: 30},
        {id: 4, number: 40},
    ]
};

const counter = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE':
            const newCounters = state.counters.filter(el => el.id !== action.payload.id);
            return {...state, counters: newCounters};

        case 'MATH_ACTION':
            const updatedCounters = state.counters.map(el => {
                if (el.id === action.payload.id) return {...el, number: el.number + action.payload.value};
                return el;
            })
            return {...state, counters: updatedCounters};

        case 'MOVE_ACTON':
            const currentElement = state.counters[action.payload.index];

            state.counters[action.payload.index] = state.counters[action.payload.index + action.payload.direction];
            state.counters[action.payload.index + action.payload.direction] = currentElement;

            return {...state, counters: state.counters.map(el => el)};

        case 'UPDATE':
            const newCountersUpdated = state.counters.map(el => {
                if (el.id === action.payload.id) return {...el, number: action.payload.newValue};
                return el;
            })
            return {...state, counters: newCountersUpdated};

        case 'ADD_COUNTER':
            const newCounter = {id: action.payload.id, number: action.payload.number};
            state.counters.push(newCounter);
            return {...state, counters: state.counters.map(el => el)};

        default:
            return state;
    }
};

export default counter;