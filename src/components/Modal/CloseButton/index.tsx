import { BiX } from "react-icons/bi";

const CloseButton = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <button className="group" onClick={handleCloseModal}>
      <BiX className="text-2xl group-hover:animate-spin" />
    </button>
  );
};

export default CloseButton;
