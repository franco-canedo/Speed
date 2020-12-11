export const toggle = () => ({
    type: 'TOGGLE'
});

const addInventory = (boxObject) => ({
    type: 'ADD',
    payload: boxObject,
})

export default addInventory;