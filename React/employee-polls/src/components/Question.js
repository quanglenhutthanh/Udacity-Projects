import { Link } from "react-router-dom";
const Question = ({question})=>{
    return (
        <div className="question-details">
            <p>{question.author}</p>
            <span>{new Date(question.timestamp).toDateString()}</span>
            <Link to={'questions/' + question.id}>
                <button>Show</button>
            </Link>
        </div>
    );
}

export default Question;