import { useState } from "react";
import ListApi from "../ListApi";

const Item = (name) => {
  return { name };
};

const ListForm = ({ items, setItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState("");

  let element;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = ({ target }) => {
    setItemName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName !== "") {
      ListApi.saveItem(Item(itemName)).then((res) => {
        console.log(res);
        setItems(res);
      });
      setIsEditing(false);
      setItemName("");
    }
  };

  if (isEditing) {
    element = (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" />
      </form>
    );
  } else {
    element = (
      <div>
        <button className="add" onClick={handleClick}>
          Add
        </button>
      </div>
    );
  }

  return element;
};

export default ListForm;
