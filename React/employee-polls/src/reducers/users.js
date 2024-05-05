import { RECEIVE_USERS, ADD_QUESTION_USER, ADD_USER_VOTE } from "../actions/users";



export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      console.log(action.users);
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_USER:
      const authorId = action.author;
      const user = state[authorId.id];

      if (user && user.questions) {
        return {
          ...state,
          [authorId]: {
            ...user,
            questions: user.questions.concat(action.questionId),
          },
        };
      } else {
        console.error(
          `User with ID ${authorId} not found or questions array is undefined.`
        );
        return state;
      }
    case ADD_USER_VOTE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.vote
          }
        }
      };
    default:
      return state;
  }
}
