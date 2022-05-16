import React, { useState } from "react";

const EditableText = ({ value, setValue }) => {
  const [isEditing, setIsEditing] = useState(false);

  let element;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  if (isEditing) {
    element = (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="Done" />
      </form>
    );
  } else {
    element = <span onClick={handleClick}>{value}</span>;
  }

  return element;
};

export default EditableText;
