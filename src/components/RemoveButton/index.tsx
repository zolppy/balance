import { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BiSolidTrashAlt } from "react-icons/bi";

interface IRemoveButton {
  index: number;
  handleClick: (index: number) => void;
}

const RemoveButton: React.FC<IRemoveButton> = ({
  index,
  handleClick,
}): React.JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleClick(index)}
    >
      {isHover ? (
        <BiSolidTrashAlt className="text-3xl" />
      ) : (
        <BiTrashAlt className="text-3xl" />
      )}
    </button>
  );
};

export default RemoveButton;
