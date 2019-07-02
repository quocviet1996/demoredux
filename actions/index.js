import {ADD_NEW_TASK,TOOGLE_ONE_TASK} from './actionTypes';
let newTaskId = 0;
export const addNewTask = (input) =>{
    return {
        type:ADD_NEW_TASK,
        taskId : newTaskId++,
        taskName : input,

    }
}

export const toogleTask = (input) =>{
    return {
        type:TOOGLE_ONE_TASK,
        taskId : taskId++,

    }
}