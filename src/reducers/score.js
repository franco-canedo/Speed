const score = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_SCORE':
            const score = state + 1
            return score;
        default:
            return state;
    }

}

export default score;