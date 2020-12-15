const score = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_SCORE':
            let score = state;
            score = score + 1;
            return score;
        default:
            return state;
    }

}

export default score;