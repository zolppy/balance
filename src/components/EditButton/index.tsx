import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";

interface IEditButton {
  index: number;
  handleClick: (index: number) => void;
}

const EditButton = ({ index, handleClick }: IEditButton) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleClick(index)}
      className="text-3xl"
    >
      {isHover ? <BiSolidPencil /> : <BiPencil />}
    </button>
  );
};

export default EditButton;
