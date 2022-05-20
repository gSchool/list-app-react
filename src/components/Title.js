import { useState } from "react";
import EditableText from "./EditableText";

const Title = () => {
  const [value, setValue] = useState("List");

  return (
    <div className="header">
      <EditableText value={value} setValue={setValue} />
    </div>
  );
};

export default Title;
