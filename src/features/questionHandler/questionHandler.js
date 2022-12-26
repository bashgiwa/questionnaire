import {v4 as uuidv4} from "uuid";
import {publish} from "../../events/events";

const setLocalStorage = (key, item) => {
  window.localStorage.setItem(key, item);
  publish("storage");
};

export const addQuestion = (question) => {
  let questions = window.localStorage.getItem("questions") || {};
  questions = Object.keys(questions).length > 0 ? JSON.parse(questions) : questions;
  const temp = {};
  temp[uuidv4()] = question;
  setLocalStorage("questions", JSON.stringify({...temp, ...questions}));
};

export const deleteQuestion = (questionID) => {
  const newQuestions = JSON.parse(window.localStorage.getItem("questions"));
  delete newQuestions[questionID];
  setLocalStorage("questions", JSON.stringify(newQuestions));
};

export const editQuestion = (newQ, questionID) => {
  const newQuestions = JSON.parse(window.localStorage.getItem("questions"));
  newQuestions[questionID] = newQ;
  setLocalStorage("questions", JSON.stringify(newQuestions));
};
