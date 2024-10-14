import { createContext, useContext, ReactNode, useState, FC } from "react";

interface IOpenCloseRemoveDialog {
  removeDialogIsOpen: boolean;
  openRemoveDialog: () => void;
  closeRemoveDialog: () => void;
}

const OpenCloseRemoveDialogCtx = createContext<
  IOpenCloseRemoveDialog | undefined
>(undefined);

const useOpenCloseRemoveDialog = (): IOpenCloseRemoveDialog => {
  const context = useContext(OpenCloseRemoveDialogCtx);
  if (!context) {
    throw new Error("");
  }
  return context;
};

const OpenCloseRemoveDialogProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [removeDialogIsOpen, setRemoveDialogIsOpen] = useState<boolean>(false);

  const openRemoveDialog = (): void => setRemoveDialogIsOpen(true);

  const closeRemoveDialog = (): void => setRemoveDialogIsOpen(false);

  return (
    <OpenCloseRemoveDialogCtx.Provider
      value={{
        removeDialogIsOpen,
        openRemoveDialog,
        closeRemoveDialog,
      }}
    >
      {children}
    </OpenCloseRemoveDialogCtx.Provider>
  );
};

export { useOpenCloseRemoveDialog, OpenCloseRemoveDialogProvider };
