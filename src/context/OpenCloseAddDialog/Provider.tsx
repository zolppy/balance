import { ReactNode, useState } from "react";
import { OpenCloseAddDialogCtx } from "./Ctx";

const OpenCloseAddDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [addDialogIsOpen, setAddDialogIsOpen] = useState<boolean>(false);

  const openAddDialog = () => {
    setAddDialogIsOpen(true);
  };

  const closeAddDialog = () => {
    setAddDialogIsOpen(false);
  };

  return (
    <OpenCloseAddDialogCtx.Provider
      value={{
        addDialogIsOpen,
        openAddDialog,
        closeAddDialog,
      }}
    >
      {children}
    </OpenCloseAddDialogCtx.Provider>
  );
};

export default OpenCloseAddDialogProvider;
