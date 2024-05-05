import { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import "./style.css";
const Home = (props) => {
  const [selectedView, setSelectedView] = useState('unanswered');

  const handleViewChange = (event) => {
    setSelectedView(event.target.value);
  };

  const answeredQuestions = props.questions.filter(
    (question) =>
      question.optionOne.votes.includes(props.authedUser.id) ||
      question.optionTwo.votes.includes(props.authedUser.id)
  );
  const unanswerQuestions = props.questions.filter(
    (question) =>
      !question.optionOne.votes.includes(props.authedUser.id) &&
      !question.optionTwo.votes.includes(props.authedUser.id)
  );

  const questionToShow = selectedView === "answered" ? answeredQuestions : unanswerQuestions;
  const questionLabel = selectedView === "answered" ? "Done" : "Unanswered";
  return (
    <div className="question-container">
      <h2> 
        <select id="viewSelect" value={selectedView} onChange={handleViewChange}>
        <option value="unanswered">Unanswered</option>
        <option value="answered">Done</option>
      </select>
      </h2>
      <ul className="question-grid">
        {questionToShow.map((question) => (
          <li key={question.id} className="question-item">
            <Question question={question} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Home);
