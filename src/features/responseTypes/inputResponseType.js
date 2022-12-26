import {useState} from "react";
import "./responseTypes.css";

const InputResponseType = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="group">
      <div className="input">
        <textarea
          className="biginput"
          value={input}
          placeholder="Enter a response here"
          onChange={handleInput}
          onSubmit={handleSubmit}
        ></textarea>
      </div>
    </div>
  );
};

export default InputResponseType;
