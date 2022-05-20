import { useEffect, useState } from 'react';
import ListApi from './ListApi';
import ListContainer from "./components/ListContainer";
import Title from "./components/Title";
import "./styles/App.css";

function App() {
  const [listTitle, setListTitle] = useState('');
  const [listData, setListData] = useState({});

  useEffect(() => {
    ListApi.fetchListData()
      .then(fetchedData => {
        setListData(fetchedData);
      })
  }, []);

  return (
    <div className="App">
      <Title />
      <ListContainer />
      <p>{JSON.stringify(listData)}</p>
    </div>
  );
}

export default App;
