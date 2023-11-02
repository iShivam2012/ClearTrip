import { useState } from "react";

const Button = () => {
  const [favClicked, setFavClicked] = useState(false);
  const onBtnClickHandler = () => {
    setFavClicked(true);
  };
  return (
    <button className="btn" onClick={onBtnClickHandler}>
      Favorite
    </button>
  );
};

export default Button;
