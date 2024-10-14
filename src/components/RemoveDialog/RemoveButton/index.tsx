import { FC, JSX } from "react";
import { useOpenCloseRemoveDialog } from "../../../context/OpenCloseRemoveDialog/Hook";
import { useCurrentRemoveTarget } from "../../../context/CurrentRemoveTarget/Hook";
import { useMovimentation } from "../../../context/Movimentation/Hook";

const RemoveButton: FC = (): JSX.Element => {
  const { closeRemoveDialog } = useOpenCloseRemoveDialog();
  const { removeTargetID } = useCurrentRemoveTarget();
  const { removeMovimentation } = useMovimentation();

  const handleClick = () => {
    removeMovimentation(removeTargetID);
    closeRemoveDialog();
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
    >
      Remover
    </button>
  );
};

export default RemoveButton;
