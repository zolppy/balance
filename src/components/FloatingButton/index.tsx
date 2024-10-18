import { BiPlus } from "react-icons/bi";
import { useOpenCloseAddModal } from "../../../context/OpenCloseAddModalCtx";

const FloatingButton = () => {
  const { openAddModal } = useOpenCloseAddModal();

  return (
    <button
      onClick={openAddModal}
      className="bg-gray-500 h-14 w-14 rounded-full grid place-items-center hover:bg-gray-600"
    >
      <BiPlus className="text-3xl" />
    </button>
  );
};

export default FloatingButton;
