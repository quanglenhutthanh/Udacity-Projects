import { receiveQuestions } from "./questions";  
import { receiveUsers } from "./users";
import { getInitialData } from "../util/api";

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({questions, users}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            
        })
    }
}