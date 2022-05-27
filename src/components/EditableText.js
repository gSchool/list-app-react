import { useEffect, useState } from "react";

const EditableText = ({ value, setValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [ editingValue, setEditingValue ] = useState('');

  useEffect(() => {
    setEditingValue(value);
  }, [value]);

  let element;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = ({ target }) => {
    setEditingValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(editingValue);
    setIsEditing(false);
  };

  if (isEditing) {
    element = (
      <form onSubmit={handleSubmit}>
        <input type="text" value={editingValue} onChange={handleChange} />
        <input type="submit" value="Done" />
      </form>
    );
  } else {
    element = <span onClick={handleClick}>{value}</span>;
  }

  return element;
};

export default EditableText;
