export const toggle = () => ({
    type: 'TOGGLE'
});

export const addInventory = (boxObject) => ({
    type: 'ADD',
    payload: boxObject,
})

export const addAnswer = (boxObject) => ({
    type: 'ADD_ANSWER',
    payload: boxObject
})

export const answer = (answerObject) => ({
    type: 'ANSWER',
    payload: answerObject
})

export const selectAnswer = (b) => ({
    type: 'SELECT_ANSWER',
    payload: b
})
    

// export default {
//     addInventory,
//     addAnswer,
// }