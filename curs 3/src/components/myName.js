import { useState } from "react";

const MyName = () => {
  const [color, setColor] = useState(false);

  const toggleColor = () => {
    setColor(!color);
  };

  return (
    <div>
      <h1 className={`my-name ${color ? "color" : ""}`} onClick={toggleColor}>
        Ionut Gavrilas
      </h1>
    </div>
  );
};

export default MyName;
