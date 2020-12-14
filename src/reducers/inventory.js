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
        case 'SELECT_ANSWER':
            const object2 = { ...state }
            let box = object2[action.payload.number].find(box => {
                return box.id == action.payload.uid
            });
           
            let index = object2[action.payload.number].indexOf(box);
            box.clicked = true;
            
            object2[action.payload.number][index] = box
            
            return object2;
        default:
            return state;
    }

}

export default inventory;