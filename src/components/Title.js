import { useState, useEffect } from "react";
import EditableText from "./EditableText";

const Title = ({ listTitle }) => {
  const [value, setValue] = useState('List');

  useEffect(() => {
    setValue(listTitle);
  },[ listTitle ]);

  return (
    <div className="header">
      <EditableText value={value} setValue={setValue} />
    </div>
  );
};

export default Title;
