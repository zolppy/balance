import { FC, JSX } from "react";
import { useMovimentation } from "../../../context/Movimentation/Hook";
import { useCurrentMovimentation } from "../../../context/CurrentMovimentation/Hook";
import { useOpenCloseAddDialog } from "../../../context/OpenCloseAddDialog/Hook";

const AddButton: FC = (): JSX.Element => {
  const { addMovimentation } = useMovimentation();
  const { currentMovimentation, resetCurrentMovimentationFields } =
    useCurrentMovimentation();
  const { closeAddDialog } = useOpenCloseAddDialog();

  const handleClick = () => {
    addMovimentation(currentMovimentation);
    closeAddDialog();
    resetCurrentMovimentationFields();
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
    >
      Adicionar
    </button>
  );
};

export default AddButton;
