import { useCurrentMovimentation } from "../../../../context/CurrentMovimentationCtx";
import { useMovimentation } from "../../../../context/MovimentationCtx";
import { useOpenCloseAddModal } from "../../../../context/OpenCloseAddModalCtx";

const AddButton = () => {
  const { addMovimentation } = useMovimentation();
  const { closeAddModal } = useOpenCloseAddModal();
  const { currentMovimentation, resetCurrentMovimentation } =
    useCurrentMovimentation();

  const handleAddMovimentation = () => {
    addMovimentation(currentMovimentation);
    closeAddModal();
    resetCurrentMovimentation();
  };

  return (
    <button
      type="submit"
      onClick={handleAddMovimentation}
      className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
    >
      Adicionar
    </button>
  );
};

export default AddButton;
