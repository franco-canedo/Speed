

const answer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            const object = [ ...state ];
            object.push(action.payload);
            return object;
        default:
            return state;
    }

}

export default answer;