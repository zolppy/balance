import { useCurrentRemoveTarget } from "../../../../context/CurrentRemoveTargetCtx";
import { useMovimentation } from "../../../../context/MovimentationCtx";
import { useOpenCloseRemoveModal } from "../../../../context/OpenCloseRemoveModalCtx";

const RemoveButton = () => {
  const { closeRemoveModal } = useOpenCloseRemoveModal();
  const { removeMovimentation } = useMovimentation();
  const { removeTargetID } = useCurrentRemoveTarget();

  const handleClick = () => {
    removeMovimentation(removeTargetID);
    closeRemoveModal();
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
