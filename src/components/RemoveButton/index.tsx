import { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BiSolidTrashAlt } from "react-icons/bi";

interface IRemoveButton {
  index: number;
  handleClick: (index: number) => void;
}

const RemoveButton = ({ index, handleClick }: IRemoveButton) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleClick(index)}
      className="text-3xl"
    >
      {isHover ? <BiSolidTrashAlt /> : <BiTrashAlt />}
    </button>
  );
};

export default RemoveButton;
