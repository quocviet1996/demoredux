import {ADD_NEW_TASK,TOOGLE_ONE_TASK} from './actionTypes';
// const taskReducers = (task =[], action) =>{
//     switch(action.type)
//     {
//         case ADD_NEW_TASK:
//         return[
//             ...task,
//             {
//                 taskId:action.taskId,
//                 taskName:action.taskName,
//                 completed:false
//             }
//         ]
//         case TOOGLE_ONE_TASK:
//         return task.map((tasks) => (tasks.taskId == action.taskId ) ? {...tasks,completed: ! tasks.completed} : tasks)
//         default :
//         return task;
//     }

// }
//export default taskReducers;
const reducers = (state = [],action) =>{
    if (action.type === ADD_NEW_TASK)
    return[
        ...state,
        {
            taskID : action.taskID,
            taskName:action.taskName,

        }
    ]
}
export default reducers;