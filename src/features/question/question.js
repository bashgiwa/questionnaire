import Divider from "../../components/divider/divider";
import {editQuestion, deleteQuestion} from "../questionHandler/questionHandler";
import "./question.css";

const Question = ({data, id}) => {
  if (!data) return null;
  const handleDelete = (e) => {
    e.preventDefault();
    deleteQuestion(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="qbackground">
      <div className="background ">
        <span>{data.question}</span>
      </div>
      <div className="buttonLayer">
        <button className="btn">Edit</button>
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <Divider />
    </div>
  );
};

export default Question;
