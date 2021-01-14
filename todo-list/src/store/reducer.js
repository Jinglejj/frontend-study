import {ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_INPUT_VALUE} from "./actionTypes";

const defultState = {
    inputValue: '',
    list: []
}
export default function f(state = defultState, action)  {
    if (action.type === UPDATE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}