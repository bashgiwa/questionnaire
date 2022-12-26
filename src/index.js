import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/error/errorPage";
import AnswerView from "./components/answerView/answerView";
import QuestionsContextProvider from "./context/AllQuestionsContext";
import NewQuestionView from "./components/newQuestionView/newQuestionView";
import AllQuestionsView from "./components/allQuestionsView/allQuestionsView";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <AllQuestionsView />,
      },
      {
        path: "/newQuestion",
        element: <NewQuestionView />,
      },
      {
        path: "/answers",
        element: <AnswerView />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <RouterProvider router={router} />
    </QuestionsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
