import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";

const EditButton: React.FC = (): React.JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <BiSolidPencil className="text-2xl" />
      ) : (
        <BiPencil className="text-2xl" />
      )}
    </button>
  );
};

export default EditButton;
