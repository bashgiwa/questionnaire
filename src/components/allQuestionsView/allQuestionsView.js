import {useContext, useEffect} from "react";
import {AllQuestionsContext} from "../../context/AllQuestionsContext";
import QuestionList from "../../features/questionList/questionList";

const AllQuestionsView = () => {
  const {setQuestions} = useContext(AllQuestionsContext);

  useEffect(() => {
    let allQuestions = JSON.parse(window.localStorage.getItem("questions")) || {};
    setQuestions(allQuestions);
  }, []);

  return (
    <>
      <header className="header">
        <span>All questions</span>
      </header>
      <div className="divider"></div>
      <QuestionList />
    </>
  );
};

export default AllQuestionsView;
