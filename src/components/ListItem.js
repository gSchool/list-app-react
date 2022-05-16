import React from "react";
import EditableText from "./EditableText";

const ListItem = ({ itemName, index, items, setItems }) => {
  const itemsCopy = [...items];

  const handleSetValue = (value) => {
    items[index].name = value;
    setItems(itemsCopy);
  };

  const handleDelete = () => {
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  return (
    <div className="item">
      <EditableText value={itemName} setValue={handleSetValue} />
      <span> - </span>
      <button onClick={handleDelete}>x</button>
    </div>
  );
};

export default ListItem;
