export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const ADD_USER_VOTE = "ADD_USER_VOTE";
export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionUser({author,questionId}){
    return{
        type: ADD_QUESTION_USER,
        author,
        questionId: questionId
    }
}

export function addUserVote(authedUser, questionId, vote){
    return{
        type: ADD_USER_VOTE,
        authedUser,
        questionId,
        vote,
    }
}