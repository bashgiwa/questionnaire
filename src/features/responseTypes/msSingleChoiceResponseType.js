import {useState} from "react";
import "./responseTypes.css";

const MSSingleChoiceResponseType = (selections) => {
  const defaultmschoice = [
    "Edit the first option here",
    "Edit the second option here",
    "Edit the third option here",
    "Edit the fourth option here",
    "Edit the fifth option here",
  ];
  const [options, setOptions] = useState(defaultmschoice);
  if (selections.length > 0) setOptions(selections);

  const handleInput = (index, e) => {
    selections[index] = e.innerText;
  };

  return (
    <ul>
      {(options || []).map((option, index) => (
        <li key={index} className="responseOptions">
          <div className="responseOption">
            <span 
              className="optText"
              contentEditable="true"
              onInput={(e) => handleInput(index, e)}
            >
              {option}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MSSingleChoiceResponseType;
