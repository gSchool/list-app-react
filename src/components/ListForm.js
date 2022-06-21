import { useState } from "react";

const ListForm = ({ itemName, setItemName, items, setItems }) => {
  const [isEditing, setIsEditing] = useState(false);

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
      const oldItems = [...items];
      oldItems.push({
        name: itemName,
      });

      setItems(oldItems);

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
