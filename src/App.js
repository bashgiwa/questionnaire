import "./App.css";

import PageContainer from "./components/pageContainer/pageContainer";
import SideBar from "./components/sidebarNavigation/sideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <PageContainer />
    </div>
  );
}

export default App;
