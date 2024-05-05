import { saveQuestion } from "../util/api";
import { saveQuestionAnswer } from "../util/api";
import { addQuestionUser, addUserVote } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION= "ADD_QUESTION";
export const ADD_VOTE = "ADD_VOTE";

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}
export function addVote(author, questionId, vote){
    return{
        type: ADD_VOTE,
        author,
        questionId,
        vote,
    };
}

export function handleAddQuestion(optionOne, optionTwo){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        console.log(optionOne);
        return saveQuestion(optionOne, optionTwo, authedUser)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question));
            })
    };
}

export function handleAddVote(questionId, vote){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return saveQuestionAnswer(authedUser.id, questionId, vote)
            .then((question) => {
                dispatch(addVote(authedUser.id, questionId, vote));
                dispatch(addUserVote(authedUser.id,questionId,vote));
            })
    };
}