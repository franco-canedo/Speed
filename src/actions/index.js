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

// export default {
//     addInventory,
//     addAnswer,
// }