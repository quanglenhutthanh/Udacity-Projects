import { connect } from "react-redux";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { handleAddVote } from "../actions/questions";

const Poll = (props) => {
  const navigate = useNavigate();

  if (props.question === undefined) {
    return <Navigate to="/404" />;
  }

  const optionOneVoteCount = props.question.optionOne.votes.length;
  const optionTwoVoteCount = props.question.optionTwo.votes.length;
  

  const calcPercentage = (option) => {
    const totalVote = optionOneVoteCount + optionTwoVoteCount;
    switch (option) {
      case "optionOne":
        const onePercent = Math.round((optionOneVoteCount / totalVote) * 100);
        return (
          onePercent + " %"
        );
      case "optionTwo":
        const twoPercent = Math.round((optionTwoVoteCount / totalVote) * 100);
        return (
          twoPercent + " %"
        );
      default:
        return "";
    }
  };

  const votedOptionOne = props.question.optionOne.votes.includes(
    props.authedUser.id
  );
  const votedOptionTwo = props.question.optionTwo.votes.includes(
    props.authedUser.id
  );
  const hasVoted = votedOptionOne || votedOptionTwo;

  const handleVoteOptionOne = (e) => {
    e.preventDefault();
    props.dispatch(handleAddVote(props.question.id, "optionOne"));
    navigate("/");
  };

  const handleVoteOptionTwo = (e) => {
    e.preventDefault();
    props.dispatch(handleAddVote(props.question.id, "optionTwo"));
    navigate("/");
  };

  return (
    <div className="poll-page-container">
      <h1 className="poll-page-title">Poll by {props.author.name}</h1>

      <div className="profile-image">
        <img
          src={props.author.avatarURL}
          alt="Profile"
          className="profile-image"
        />
      </div>

      <div className="poll-question-title">
        <h2 className="font-bold mt-6">Would you rather?</h2>
      </div>

      <div className="poll-options-container">
        <div className={votedOptionOne ? "poll-option-voted" : "poll-option"}>
          <span>{props.question.optionOne.text}</span>
          <div className="poll-info">
            <span>(Voted: {optionOneVoteCount})</span>
            <span>({calcPercentage("optionOne")})</span>
          </div>
          {!hasVoted && (
            <button
              onClick={handleVoteOptionOne}
              className="poll-option-button"
            >
              Vote
            </button>
          )}
        </div>
        <div className={votedOptionTwo ? "poll-option-voted" : "poll-option"}>
          <span>{props.question.optionTwo.text}</span>
          <div className="poll-info">
            <span>(Voted: {optionTwoVoteCount})</span>
            <span>({calcPercentage("optionTwo")})</span>
          </div>
          {!hasVoted && (
            <button
              onClick={handleVoteOptionTwo}
              className="poll-option-button"
            >
              Vote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try{
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    
    const author = Object.values(users).find(
        (user) => user.id === question.author
      );
    return { authedUser, question, author };
  }
  catch{
    return <Navigate to="/404" />;
  }
  
};

export default connect(mapStateToProps)(Poll);
