import { FC, JSX } from "react";
import { useMovimentationCtx } from "../../../context/MovimentationCtx";
import { useCurrentMovimentationCtx } from "../../../context/CurrentMovimentationCtx";
import { useOpenCloseAddDialogCtx } from "../../../context/OpenCloseAddDialogCtx";

const ApplyButton: FC = ({}): JSX.Element => {
  const { addMovimentation }: any = useMovimentationCtx();
  const { currentMovimentation }: any = useCurrentMovimentationCtx();
  const { closeAddDialog }: any = useOpenCloseAddDialogCtx();

  const handleClick = () => {
    addMovimentation(currentMovimentation);
    closeAddDialog();
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
    >
      Aplicar
    </button>
  );
};

export default ApplyButton;
