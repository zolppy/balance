import { BiPlus } from "react-icons/bi";
import { useOpenCloseAddDialogCtx } from "../../context/OpenCloseAddDialogCtx";

const FloatingButton: React.FC = (): React.JSX.Element => {
  const { openAddDialog }: any = useOpenCloseAddDialogCtx();

  return (
    <button
      onClick={openAddDialog}
      className="bg-blue-500 h-12 w-12 rounded-full absolute right-[1%] bottom-[1%] -translate-x-1/2 -translate-y-1/2 grid place-items-center hover:bg-blue-600"
    >
      <BiPlus className="text-2xl" />
    </button>
  );
};

export default FloatingButton;
