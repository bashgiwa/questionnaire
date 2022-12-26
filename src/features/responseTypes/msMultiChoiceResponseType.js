import {useState} from "react";
import "./responseTypes.css";

const MSMultiChoiceResponseType = (selections) => {
  const defaultmschoice = [
    "Edit the first option here",
    "Edit the second option here",
    "Edit the third option here",
    "Edit the fourth option here",
    "Edit the fifth option here",
  ];
  const [options, setOptions] = useState(defaultmschoice);
  if (selections.length > 0) setOptions(selections);

  // const getSelections = () => {
  //   return selections;
  // };

  const handleInput = (index, e) => {
    selections[index] = e.innerText;
  };

  return (
    <div>
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
    </div>
  );
};

export default MSMultiChoiceResponseType;
