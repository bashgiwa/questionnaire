import {useState} from "react";
import Divider from "../../components/divider/divider";
import ResponseType from "../responseTypes/responseType";
import {addQuestion} from "../questionHandler/questionHandler";
import "./questionForm.css";

const QuestionForm = () => {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("");
  const [styleObj, setStyleObj] = useState({display: "none"});

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      question: input,
      answerType: inputType,
    };
    addQuestion(newQuestion);
    setInput("");
  };

  const handleInputSelected = (e) => {
    e.preventDefault();
    setInputType(e.target.value);
    if (inputType !== "text") setStyleObj({display: "block"});
  };

  return (
    <div>
      <section>
        <div className="selection">
          <textarea
            contentEditable="true"
            className="enter"
            type="text"
            placeholder="Type your question here"
            value={input}
            onChange={handleInput}
          ></textarea>
        </div>
      </section>
      <Divider />
      <section className="selection">
        <form>
          <span>Choose a response type</span>

          <div style={{marginTop: "1em"}}>
            <input
              style={{marginLeft: "5em"}}
              type="radio"
              id="text"
              name="option"
              value="text"
              onChange={handleInputSelected}
            />
            <label for="text">text</label>
            <input
              style={{
                marginLeft: "5em",
                marginRight: "2px",
              }}
              type="radio"
              id="singleChoice"
              name="option"
              value="singleChoice"
              onChange={handleInputSelected}
            />
            <label for="singleChoice">singleChoice</label>
            <input
              style={{marginLeft: "5em"}}
              type="radio"
              id="multiChoice"
              name="option"
              value="multiChoice"
              onChange={handleInputSelected}
            />
            <label for="multiChoice">multiChoice</label>
          </div>
        </form>
      </section>
      <Divider />
      <section style={styleObj}>
        <ResponseType type={inputType} />
      </section>
      <Divider />
      <section className="selection">
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default QuestionForm;
