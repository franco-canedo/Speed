const score = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_SCORE':
            console.log('increase score');
            let score = state;
            return score + 1;
        default:
            return state;
    }

}

export default score;