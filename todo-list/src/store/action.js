import {ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_INPUT_VALUE} from "./actionTypes";

export const getUpdateInputValue = (value) => ({
    type: UPDATE_INPUT_VALUE,
    value
})

export const getAddTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getTodoList=()=>{
    return (dispatch)=>{

    }
}
