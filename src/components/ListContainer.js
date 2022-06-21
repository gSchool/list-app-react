import { useState } from "react";
import ListForm from "./ListForm";
import ListActual from "./ListActual";

const ListContainer = () => {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div>
      <ListForm
        itemName={itemName}
        setItemName={setItemName}
        setItems={setItems}
        items={items}
      />
      <ListActual items={items} setItems={setItems} />
    </div>
  );
};

export default ListContainer;
