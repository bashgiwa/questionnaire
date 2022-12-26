import InputResponseType from "./inputResponseType";
import MSMultiChoiceResponseType from "./msMultiChoiceResponseType";
import MSSingleChoiceResponseType from "./msSingleChoiceResponseType";
import "./responseTypes.css";

const ResponseType = ({type}) => {
  if (!type) return null;
  if (type === "text") {
    return null;
    // return <InputResponseType />;
  }
  if (type === "singleChoice") {
    return <MSSingleChoiceResponseType />;
  }
  if (type === "multiChoice") {
    return <MSMultiChoiceResponseType />;
  }
};

export default ResponseType;
