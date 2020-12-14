const selectAnswer = (state = [], action) => { 
    switch(action.type) {
      case 'SELECT_ANSWER':
        const array = [...state, action.payload]
        return array;
      default: 
        return state;
  }
}

export default selectAnswer;