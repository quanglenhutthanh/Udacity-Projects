const { _saveQuestion, _saveQuestionAnswer } = require("./_DATA");

describe("_saveQuestion", () => {
  it("Save question success", async () => {
    const questionData = {
      optionOneText: "Option One Text",
      optionTwoText: "Option Two Text",
      author: {
        id: "sarahedo",
        name: "Sarah Edo",
      },
    };
    const savedQuestion = await _saveQuestion(questionData);

    expect(savedQuestion).toHaveProperty("id");
  });
  it("Save question fail with error message", async () => {
    const questionData = {
      optionOneText: "Option One Text",
      optionTwoText: "Option Two Text",
      author: undefined,
    };
    try{
      await _saveQuestion(questionData);
    }catch(error){
      expect(error).toEqual('Please provide optionOneText, optionTwoText, and author');
    }
  });
});


describe("_saveQuestionAnswer", () => {
  it("_saveQuestionAnswer success", async () => {
      const response = await _saveQuestionAnswer({
          authedUser: "tylermcginnis",
          qid: "8xf0y6ziyjabvozdd253nd",
          answer: "optionOne"
      });

      expect(response).toBeTruthy();
  });

  it("_saveQuestionAnswer should return an error for an undefined parameter.", async () => {
      const response = await _saveQuestionAnswer({
          authedUser: "tylermcginnis",
          qid: undefined,
          answer: "optionTwo"
      }).catch(e => e);

      expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});

