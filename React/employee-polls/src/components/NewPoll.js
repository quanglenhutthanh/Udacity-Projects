import { useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = (props) => {
    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    
    const onOptionOneChange = (e) => {
        const value = e.target.value;
        setOptionOne(value);
    }
    const onOptionTwoChange = (e) => {
        const value = e.target.value;
        setOptionTwo(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleAddQuestion(optionOne,optionTwo));
        console.log("data: " + optionOne);
        navigate("/");
    };
    return(
        <div className="poll-page-container">
        <h1 className="poll-page-title">New Poll</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Option</label>
                    <div className="mt-1">
                        <input type="text" data-testid="optionOne"
                            onChange={onOptionOneChange}/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Second Option</label>
                    <div className="mt-1">
                        <input type="text" data-testid="optionTwo"
                            onChange={onOptionTwoChange}/>
                    </div>
                </div>

                <div>
                    <button data-testid="submit" className="poll-option-button">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default connect()(NewPoll);