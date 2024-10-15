import { BiPlus } from "react-icons/bi";
import { useOpenCloseAddModal } from "../../../context/OpenCloseAddModalCtx";

const FloatingButton = () => {
  const { openAddModal } = useOpenCloseAddModal();

  return (
    <button
      onClick={openAddModal}
      className="bg-blue-500 h-14 w-14 rounded-full fixed right-[1%] bottom-[1%] -translate-x-1/2 -translate-y-1/2 grid place-items-center hover:bg-blue-600"
    >
      <BiPlus className="text-3xl" />
    </button>
  );
};

export default FloatingButton;
