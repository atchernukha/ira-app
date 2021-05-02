import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

function App() {
  return (
    <div className="grid-container">
      <Header className="header"></Header>
      <div className="main">
      <Sidebar className="sidebar"></Sidebar>
      <Main ></Main>
      </div>
    </div>
  );
}

export default App;
