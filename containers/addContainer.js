import {connect} from 'react-redux';  
import {ADD_NEW_TASK} from '../actions/actionTypes';
import addComponent from '../components/addComponent';
let newTaskId = 0;
const mapStatetoProps = (state) => {
    return {

    }

}

const mapDispatchtoProps = (dispatch) =>{
    return {
        ClickAdd : (taskName) =>{
            dispatch(   
                 {
                type:ADD_NEW_TASK,
                taskId : newTaskId++,
                taskName : taskName,
        
            })
        

        }
    }

}
export default connect(mapDispatchtoProps)(addComponent);