import { useEffect, useState } from "react";
import ListApi from "./ListApi";
import ListContainer from "./components/ListContainer";
import Title from "./components/Title";
import "./styles/App.css";

function App() {
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    ListApi.fetchTitle().then((fetchedTitle) => {
      setListTitle(fetchedTitle);
    });
  }, []);

  return (
    <div className="App">
      <Title listTitle={listTitle} />
      <ListContainer />
    </div>
  );
}

export default App;
