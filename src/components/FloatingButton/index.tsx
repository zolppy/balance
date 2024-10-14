import { BiPlus } from "react-icons/bi";
import { useOpenCloseAddDialog } from "../../context/OpenCloseAddDialog/Hook";

const FloatingButton: React.FC = (): React.JSX.Element => {
  const { openAddDialog } = useOpenCloseAddDialog();

  return (
    <button
      onClick={openAddDialog}
      className="bg-blue-500 h-14 w-14 rounded-full fixed right-[1%] bottom-[1%] -translate-x-1/2 -translate-y-1/2 grid place-items-center hover:bg-blue-600"
    >
      <BiPlus className="text-3xl" />
    </button>
  );
};

export default FloatingButton;
