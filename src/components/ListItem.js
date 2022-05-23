import EditableText from "./EditableText";
import ListApi from "../ListApi";

const ListItem = ({ itemName, index, items, setItems }) => {
  const handleSetValue = (value) => {
    ListApi.updateItem(index, value).then((res) => {
      console.log(res);
      setItems(res);
    });
    items[index].name = value;
  };

  const handleDelete = () => {
    ListApi.deleteItem(index).then((res) => {
      console.log(res);
      setItems(res);
    });
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
