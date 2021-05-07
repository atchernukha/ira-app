import './App.css';
import Header from "./components/header";
import CheckList from "./components/checkList";
import Main from "./components/main";

function App() {
  return (
    <div className="grid-container">
      <Header></Header>
      <div className="content">
      <CheckList></CheckList>
      <Main></Main>
      </div>
    </div>
  );
}
export default App;
