import { BiX } from "react-icons/bi";

const CloseButton: React.FC<{ handleCloseDialog: () => void }> = ({
  handleCloseDialog,
}): React.JSX.Element => {
  return (
    <button className="group" onClick={handleCloseDialog}>
      <BiX className="text-2xl group-hover:animate-spin" />
    </button>
  );
};

export default CloseButton;
