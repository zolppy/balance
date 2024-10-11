import React, { createContext, useContext, ReactNode, useState } from "react";

interface IOpenCloseAddDialog {
  setAddDialogRef: React.Dispatch<
    React.SetStateAction<HTMLDialogElement | null>
  >;
  addDialogIsOpen: boolean;
  openAddDialog: () => void;
  closeAddDialog: () => void;
}

const OpenCloseAddDialogCtx = createContext<IOpenCloseAddDialog | undefined>(
  undefined
);

const useOpenCloseAddDialogCtx = () => {
  return useContext<IOpenCloseAddDialog | undefined>(OpenCloseAddDialogCtx);
};

const OpenCloseAddDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [addDialogRef, setAddDialogRef] = useState<HTMLDialogElement | null>(
    null
  );
  const [addDialogIsOpen, setAddDialogIsOpen] = useState<boolean>(false);

  const openAddDialog = () => {
    addDialogRef?.showModal();
    setAddDialogIsOpen(true);
  };

  const closeAddDialog = () => {
    addDialogRef?.close();
    setAddDialogIsOpen(false);
  };

  return (
    <OpenCloseAddDialogCtx.Provider
      value={{
        setAddDialogRef,
        addDialogIsOpen,
        openAddDialog,
        closeAddDialog,
      }}
    >
      {children}
    </OpenCloseAddDialogCtx.Provider>
  );
};

export { useOpenCloseAddDialogCtx, OpenCloseAddDialogProvider };
