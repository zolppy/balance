import { createContext, ReactNode, useContext, useState } from "react";

export interface IOpenCloseAddDialog {
  addDialogIsOpen: boolean;
  openAddDialog: () => void;
  closeAddDialog: () => void;
}

const OpenCloseAddDialogCtx = createContext<IOpenCloseAddDialog | undefined>(
  undefined
);

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

export { OpenCloseAddDialogCtx, OpenCloseAddDialogProvider };

export const useOpenCloseAddDialog = (): IOpenCloseAddDialog => {
  const context = useContext(OpenCloseAddDialogCtx);
  if (!context) {
    throw new Error(
      "useOpenCloseAddDialog must be used within a OpenCloseAddDialogProvider"
    );
  }
  return context;
};
