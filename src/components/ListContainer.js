import { useState } from "react";
import ListForm from "./ListForm";
import ListActual from "./ListActual";

const ListContainer = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <ListForm setItems={setItems} items={items} />
      <ListActual items={items} setItems={setItems} />
    </div>
  );
};

export default ListContainer;
