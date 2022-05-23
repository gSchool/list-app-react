import { useState, useEffect } from "react";
import EditableText from "./EditableText";
import ListApi from "../ListApi";

const Title = ({ listTitle }) => {
  const [value, setValue] = useState("List");

  const persistValue = (passedValue) => {
    ListApi.saveTitle(passedValue).then((responseBody) => {
      setValue(responseBody.title);
    });
  };

  useEffect(() => {
    setValue(listTitle);
  }, [listTitle]);

  return (
    <div className="header">
      <EditableText value={value} setValue={persistValue} />
    </div>
  );
};

export default Title;
