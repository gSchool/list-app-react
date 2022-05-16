import "./App.css";
import ListContainer from "./components/ListContainer";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <ListContainer />
      </header>
    </div>
  );
}

export default App;
