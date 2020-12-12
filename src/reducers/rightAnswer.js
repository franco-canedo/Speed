const rightAnswer = (state = {}, action) => { 
    switch(action.type) {
      case 'ANSWER':
        const object = action.payload;
        return object;
      default: 
        return state;
  }
}

export default rightAnswer;