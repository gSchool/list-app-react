import { useEffect } from "react";
import ListItem from "./ListItem";
import ListApi from "../ListApi";

const ListActual = ({ items, setItems }) => {
  useEffect(() => {
    ListApi.fetchListData().then((fetchedData) => {
      setItems(fetchedData.items);
    });
  }, [setItems]);

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
