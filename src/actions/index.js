import { UIDConsumer } from "react-uid";

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

export const selectAnswer = (data) => ({
    type: 'SELECT_ANSWER',
    payload: data
})

export const deselectAnswer = (data) => ({
    type: 'DESELECT_ANSWER',
    payload: data
})

export const increaseScore = () => ({
    type: 'INCREASE_SCORE',
})
    

// export default {
//     addInventory,
//     addAnswer,
// }