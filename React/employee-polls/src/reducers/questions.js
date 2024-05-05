import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_VOTE } from "../actions/questions";  

export default function questions(state = {}, action){
    switch(action.type)
    {
        case RECEIVE_QUESTIONS:
            console.log(action.questions);
            return{
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question,
            };
            case ADD_VOTE:
                return {
                  ...state,
                  [action.questionId]: {
                    ...state[action.questionId],
                    [action.vote]: {
                      ...state[action.questionId][action.vote],
                      votes: state[action.questionId][action.vote].votes.concat(action.author)
                    }
                  }
          
          
                };
        default:
            return state;
    }
}