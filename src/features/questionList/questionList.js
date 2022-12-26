import {useContext} from "react";
import {AllQuestionsContext} from "../../context/AllQuestionsContext";
import Question from "../question/question";

const QuestionList = () => {
  const {questions} = useContext(AllQuestionsContext);
  return (
    <ul>
      {(Object.entries(questions) || []).map(([key, question]) => (
        <li key={key}>
          <Question id={key} data={question} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
