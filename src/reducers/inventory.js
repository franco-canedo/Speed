const initialState = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
}

const inventory = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const object = { ...state }
            object[action.payload.number].push(action.payload);
            return object;
        default:
            return state;
    }

}

export default inventory;