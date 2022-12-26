import React, {createContext, useState} from "react";

export const AllQuestionsContext = createContext();

export const QuestionsContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  return (
    <AllQuestionsContext.Provider value={{questions, setQuestions}}>
      {props.children}
    </AllQuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
