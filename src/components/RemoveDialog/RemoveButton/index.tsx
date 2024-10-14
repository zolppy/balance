import { FC, JSX } from "react";
import { useOpenCloseRemoveDialogCtx } from "../../../context/OpenCloseRemoveDialogCtx";
import { useCurrentRemoveTargetCtx } from "../../../context/CurrentRemoveTargetCtx";
import { useMovimentationCtx } from "../../../context/MovimentationCtx";

const RemoveButton: FC = ({}): JSX.Element => {
  const { closeRemoveDialog }: any = useOpenCloseRemoveDialogCtx();
  const { removeTargetID, removeTargetRef }: any = useCurrentRemoveTargetCtx();
  const { removeMovimentation }: any = useMovimentationCtx();

  const handleClick = () => {
    removeMovimentation(removeTargetID, removeTargetRef);
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
