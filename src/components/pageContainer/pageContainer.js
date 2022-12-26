import QuestionsContextProvider from "../../context/AllQuestionsContext";
import {Outlet} from "react-router-dom";

const PageContainer = () => {
  return (
    <div>
      <QuestionsContextProvider>
        <Outlet />
      </QuestionsContextProvider>
    </div>
  );
};

export default PageContainer;
