import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import ListApi from "../ListApi";

const ListActual = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ListApi.fetchListData()
    .then(fetchedData => {
      setItems(fetchedData.items);
    });
  }, []);

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          itemName={item.name}
          items={items}
          setItems={setItems}
        />
      ))}
    </ul>
  );
};

export default ListActual;
