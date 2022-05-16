import React from "react";
import ListItem from "./ListItem";

const ListActual = ({ items, setItems }) => {
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
